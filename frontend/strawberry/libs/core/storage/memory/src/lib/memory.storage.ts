import { Injectable } from '@angular/core';
import {SyncStorage} from "@strawberry/core/storage/common";

@Injectable({
  providedIn: 'root'
})
export class MemoryStorage implements SyncStorage {
  private data: Map<string, unknown> = new Map<string, unknown>();

  get length(): number {
    return this.data.size;
  }

  clear(): void {
    this.data.clear();
  }

  getItem<T = unknown>(key: string): T | null {
    return this.data.get(key) as T ?? null;
  }

  key(index: number): string | null {
    const keys: string[] = Array.from<string>(this.data.keys());

    return index >= 0 && keys.length < index ? keys[index] : null;
  }

  removeItem(key: string): void {
    this.data.delete(key);
  }

  setItem<T = unknown>(key: string, value: T): void {
    this.data.set(key, value);
  }

  [name: string]: any;
}
