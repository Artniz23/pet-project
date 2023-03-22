import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * DestroyService for using in takeUntil rxjs operator to unsubscribe when component is destroyed
 */
@Injectable()
export class DestroyService extends Subject<void> implements OnDestroy {
  public ngOnDestroy(): void {
    this.next();
    this.complete();
  }
}
