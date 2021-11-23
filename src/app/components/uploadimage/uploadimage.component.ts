import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

const URL = 'https://myma-demos.com.mx/promos/uploadFiles/upload-files.php';

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})
export class UploadimageComponent implements OnInit {

  imagenPrevia: any;
  respuestaFtp: any;
  public archivos: any = []
  loading: boolean = false;
  pesoValido: boolean = false;
  estatusSubida: string = "";

  @Output() imagenServida: EventEmitter<any> = new EventEmitter();

  datosImagen: any = {
    nombre: "",
    peso: 0
  }

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {
  }


  ngOnInit(): void {
  }

  public onFileSelected(event: any) {

    const imagen = event.target.files[0];
    /*console.log(imagen);
    console.log(imagen.size);
    console.log(imagen.size / 1024 / 1024 + ' MB');
    console.log(imagen.size / 1024 + ' KB');*/
    this.datosImagen.peso = imagen.size / 1024;

    
    
    if (this.datosImagen.peso > 3001){
      //console.log("la imagen es muy grande");
      this.estatusSubida = 'La imagen es muy grande';
      this.pesoValido = false;
    }else{
      this.estatusSubida = '';
      this.pesoValido = true;
    }

    if (imagen.type == "image/gif" || imagen.type == "image/jpeg" || imagen.type == "image/png") {
      //console.log('Si es una imagen');
      this.archivos.push(imagen)
      this.blobFile(imagen).then((res: any) => {
        //console.log(res);
        this.imagenPrevia = res.base;

      })
    } else {
      //console.log('No es imagen');

    }
  }


  loadImages = () => {
    try {
      const formData = new FormData();
      this.archivos.forEach((item: any) => {
        formData.append('file', item)
      });
      this.loading = true;
      this.estatusSubida = 'Cargando';
      this.http.post(`https://myma-demos.com.mx/promos/uploadFiles/upload-files.php`, formData)
        .subscribe(res => {
          this.respuestaFtp = res;
          //console.log(res);
          this.loading = false;
          if (this.respuestaFtp.status == true) {
            this.datosImagen.nombre = this.respuestaFtp.generatedName;
            //console.log(this.datosImagen);
            
            
            this.estatusSubida = 'Carga exitosa';
            this.imagenServida.emit(this.datosImagen);
          }
          //console.log('Carga exitosa');
        });
    } catch (e) {
      //console.log('ERROR', e);
    }
  }

  blobFile = async ($event: any) => new Promise((resolve, reject) => {

    const unsafeImg = window.URL.createObjectURL($event);
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
    const reader = new FileReader();
    reader.readAsDataURL($event);
    reader.onload = () => {
      resolve({
        blob: $event,
        image,
        base: reader.result
      });
    };
    reader.onerror = error => {
      resolve({
        blob: $event,
        image,
        base: null
      });
    };

  });

}
