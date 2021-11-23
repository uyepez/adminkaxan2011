import { TestBed } from '@angular/core/testing';

import { OlvidasteService } from './olvidaste.service';

describe('OlvidasteService', () => {
  let service: OlvidasteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlvidasteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
