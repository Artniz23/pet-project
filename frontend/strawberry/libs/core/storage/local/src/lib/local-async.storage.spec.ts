import { TestBed } from '@angular/core/testing';

import { LocalAsyncStorage } from './local-async-storage';

describe('LocalAsyncStorageService', () => {
  let service: LocalAsyncStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalAsyncStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
