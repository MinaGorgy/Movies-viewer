import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GenericHttpService } from './generic-http.service';

describe('GenericHttpService', () => {
  let service: GenericHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GenericHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
