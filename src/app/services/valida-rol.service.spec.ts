import { TestBed } from '@angular/core/testing';

import { ValidaRolService } from './valida-rol.service';

describe('ValidaRolService', () => {
  let service: ValidaRolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidaRolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
