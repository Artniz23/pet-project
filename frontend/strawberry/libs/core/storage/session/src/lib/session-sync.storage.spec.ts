import { TestBed } from '@angular/core/testing';

import { SessionSyncStorage } from './session-sync-storage';

describe('SessionSyncStorageService', () => {
  let service: SessionSyncStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionSyncStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
