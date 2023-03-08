import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MediaInfo } from '../../classes/media/media-info';
import { MediaBreakpoint } from '../../classes/media/media-breakpoint';

/**
 * Service for processing screen size
 */
@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private resize$: ReplaySubject<MediaInfo> = new ReplaySubject<MediaInfo>(1);

  public onResize$: Observable<MediaInfo> = this.resize$.asObservable();

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe(Array.from(MediaBreakpoint.list.keys()))
      .pipe(
        tap((breakpointState: BreakpointState) => {
          this.processBreakpointState(breakpointState);
        }),
      )
      .subscribe();
  }

  private processBreakpointState(breakpointState: BreakpointState): void {
    for (const [screenSize, isMatch] of Object.entries(breakpointState.breakpoints)) {
      if (!isMatch) {
        continue;
      }

      const mediaInfo: MediaInfo | undefined = MediaBreakpoint.list.get(screenSize);

      if (!mediaInfo) {
        continue;
      }

      this.resize$.next(mediaInfo);
    }
  }
}
