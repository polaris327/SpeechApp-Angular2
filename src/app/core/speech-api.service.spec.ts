import { TestBed, inject } from '@angular/core/testing';

import { SpeechApiService } from './speech-api.service';

describe('SpeechApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeechApiService]
    });
  });

  it('should ...', inject([SpeechApiService], (service: SpeechApiService) => {
    expect(service).toBeTruthy();
  }));
});
