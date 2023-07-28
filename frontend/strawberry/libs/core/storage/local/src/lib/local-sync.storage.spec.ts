import { TestBed } from '@angular/core/testing';

import { LocalSyncStorage } from './local-sync-storage';

describe('LocalSyncStorageService', () => {
  let service: LocalSyncStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalSyncStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
