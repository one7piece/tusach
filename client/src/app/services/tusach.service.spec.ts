import { TestBed, inject } from '@angular/core/testing';

import { TusachService } from './tusach.service';

describe('TusachService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TusachService]
    });
  });

  it('should be created', inject([TusachService], (service: TusachService) => {
    expect(service).toBeTruthy();
  }));
});
