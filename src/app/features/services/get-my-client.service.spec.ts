import { TestBed } from '@angular/core/testing';

import { GetMyClientService } from './get-my-client.service';

describe('GetMyClientService', () => {
  let service: GetMyClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMyClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
