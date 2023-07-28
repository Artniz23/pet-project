import { TestBed } from '@angular/core/testing';

import { MemoryStorageService } from './memory.storage';

describe('MemoryStorageService', () => {
  let service: MemoryStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
