import { TestBed } from '@angular/core/testing';

import { VotingApiService } from './voting-api.service';

describe('VotingApiService', () => {
  let service: VotingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
