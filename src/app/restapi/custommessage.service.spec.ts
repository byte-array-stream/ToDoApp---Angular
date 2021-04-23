import { TestBed } from '@angular/core/testing';

import { CustomMessageService } from './custommessage.service';

describe('CustommessageService', () => {
  let service: CustomMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
