import { TestBed } from '@angular/core/testing';

import { DoguinhosService } from './doguinhos.service';

describe('DoguinhosService', () => {
  let service: DoguinhosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoguinhosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
