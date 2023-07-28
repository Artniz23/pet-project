import { Injectable } from '@angular/core';

import {AbstractSyncStorage, storageAvailable} from "@strawberry/core/storage/common";
import {MemoryStorage} from "@strawberry/core/storage/memory";

@Injectable({
  providedIn: 'root'
})
export class SessionSyncStorage extends AbstractSyncStorage {

  constructor() {
    super(storageAvailable('sessionStorage') ? window.sessionStorage : new MemoryStorage())
  }
}
