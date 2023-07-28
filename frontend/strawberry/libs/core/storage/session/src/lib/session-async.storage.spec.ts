import { TestBed } from '@angular/core/testing';

import { SessionAsyncStorage } from './session-async-storage';

describe('SessionAsyncStorageService', () => {
  let service: SessionAsyncStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionAsyncStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
