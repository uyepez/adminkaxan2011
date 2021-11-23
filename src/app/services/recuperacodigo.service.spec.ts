import { TestBed } from '@angular/core/testing';

import { RecuperacodigoService } from './recuperacodigo.service';

describe('RecuperacodigoService', () => {
  let service: RecuperacodigoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuperacodigoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
