import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import { Injectable } from '@angular/core';
import {BehaviorSubject, tap} from "rxjs";

import {LAYOUT_OBSERVE_TYPES, LAYOUT_SHORT_TYPES} from "./layout.config";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private readonly layoutSubject$: BehaviorSubject<string> = new BehaviorSubject<string>(Breakpoints.Handset);

  layoutType$ = this.layoutSubject$.asObservable();

  get snapshotLayoutType(): string {
    return this.layoutSubject$.value;
  }

  constructor(
    private readonly breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe(LAYOUT_OBSERVE_TYPES)
      .pipe(
        tap((result: BreakpointState) => {
          let type: string = Breakpoints.Handset;

          for (const query of Object.keys(result.breakpoints)) {
            if (!result.breakpoints[query]) {
              continue;
            }

            type = LAYOUT_SHORT_TYPES[query];

            break;
          }

          this.layoutSubject$.next(type);
        })
      )
      .subscribe();
  }

  isSize(size: string): boolean {
    return size === this.snapshotLayoutType;
  }
}
