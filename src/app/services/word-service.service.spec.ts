import { TestBed, inject } from '@angular/core/testing';

import { WordServiceService } from './word-service.service';

describe('WordServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordServiceService]
    });
  });

  it('should be created', inject([WordServiceService], (service: WordServiceService) => {
    expect(service).toBeTruthy();
  }));
});
