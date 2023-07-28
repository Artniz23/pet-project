import { Injectable } from '@angular/core';

import {AbstractSyncStorage, storageAvailable} from "@strawberry/core/storage/common";
import {MemoryStorage} from "@strawberry/core/storage/memory";

@Injectable({
  providedIn: 'root'
})
export class LocalSyncStorage extends AbstractSyncStorage {

  constructor() {
    super(storageAvailable('localStorage') ? window.localStorage : new MemoryStorage());
  }
}
