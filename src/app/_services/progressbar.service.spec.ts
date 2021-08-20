import { TestBed } from '@angular/core/testing';

import { ProgressService } from './progressbar.service';

describe('ProgressbarService', () => {
  let service: ProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
