import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbDateParserFormatter, NgbDatepickerI18n, NgbDate, NgbCalendar, NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';  ////datepiker en español
import { AngularEditorConfig } from '@kolkov/angular-editor'; //editor de texto html

//para subir la foto
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


/******************* DATEPIKER ESPAÑOL ****************/
/**************************************************** */
const I18N_VALUES = {
  'fr': {
    weekdays: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  }
};

function padNumber(value: number | null) {
  if (!isNaN(value) && value !== null) {
    return `0${value}`.slice(-2);
  }
  return '';
}

@Injectable()
export class I18n {
  language = 'fr';
}

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

  constructor(private _i18n: I18n) {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}/${date.month}/${date.year}`;
  }
}


@Injectable()
export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {
  parse(value: string): NgbDateStruct | null {
    if (value) {
      const dateParts = value.trim().split('/');

      let dateObj: NgbDateStruct = { day: <any>null, month: <any>null, year: <any>null }
      const dateLabels = Object.keys(dateObj);

      dateParts.forEach((datePart, idx) => {
        dateObj[dateLabels[idx]] = parseInt(datePart, 10) || <any>null;
      });
      return dateObj;
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ?
      `${padNumber(date.day)}/${padNumber(date.month)}/${date.year || ''}` :
      '';
  }
}

/************ tERMINA DATEPIKER ESPAÑOL ***************/
/**************************************************** */

@Component({
  selector: 'app-nuevapromo',
  templateUrl: './nuevapromo.component.html',
  providers: [NgbModalConfig, NgbModal, I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }, { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }], //datepiker en español
  styles: [`
    .custom-day {
      text-align: center;
      padding: 0.185rem 0.25rem;
      display: inline-block;
      height: 2rem;
      width: 2rem;
    }
    .custom-day.focused {
      background-color: #e6e6e6;
    }
    .custom-day.range, .custom-day:hover {
      background-color: rgb(2, 117, 216);
      color: white;
    }
    .custom-day.faded {
      background-color: rgba(2, 117, 216, 0.5);
    }
  `]
})




export class NuevapromoComponent implements OnInit {

  ngOnInit(): void {
  }
  
  //tiempo
  timeInicio = { hour: 0, minute: 0 };
  timeFin = { hour: 23, minute: 59 };
  hoveredDate: NgbDate | null = null;

  //fechas
  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  //editor de HTML
  mecanicaContent = '';
  legalesContent = '';

  mecanicaCorta = '';

  constructor(calendar: NgbCalendar, private modalService: NgbModal, config: NgbModalConfig, private http: HttpClient, private router: Router) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

    //modal opciones
    config.backdrop = 'static';
    config.keyboard = false;
  }



  /******************Rango de fechas ****************/
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }
  
  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }
  
  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }
  
  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }
  /******************Termina Rango de fechas****************/
  
  /******************Editor de HTML****************/

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
  /******************Termina Editor de HTML****************/
  
 


  irBannersPromo(){
    this.router.navigateByUrl('/bannerspromo');
  }


}