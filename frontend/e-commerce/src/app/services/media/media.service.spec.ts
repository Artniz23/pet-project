import { MediaService } from './media.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { of } from 'rxjs';
import { MediaInfo } from '../../classes/media/media-info';
import { MediaClass, MediaCode, MediaScreenSize } from '../../classes/media/media-breakpoint';

describe('MediaService: Test MediaService class on different screen size', () => {
  it(`should be code ${MediaCode.WebLandscape} and class ${MediaClass.WebLandscape}`, () => {
    const fakeBreakpointState: BreakpointState = {
      matches: true,
      breakpoints: {
        [MediaScreenSize.WebLandscape]: true,
      },
    };

    const fakeBreakpointObserver = jasmine.createSpyObj<BreakpointObserver>('BreakpointObserver', {
      observe: of(fakeBreakpointState),
    });

    const mediaService: MediaService = new MediaService(fakeBreakpointObserver);

    mediaService.onResize$.subscribe((mediaInfo: MediaInfo) => {
      expect(mediaInfo.code).toBe('wl');
      expect(mediaInfo.className).toBe(MediaClass.WebLandscape);
    });
  });

  it(`should be code ${MediaCode.TabletLandscape} and class ${MediaClass.TabletLandscape}`, () => {
    const fakeBreakpointState: BreakpointState = {
      matches: true,
      breakpoints: {
        [MediaScreenSize.TabletLandscape]: true,
      },
    };

    const fakeBreakpointObserver = jasmine.createSpyObj<BreakpointObserver>('BreakpointObserver', {
      observe: of(fakeBreakpointState),
    });

    const mediaService: MediaService = new MediaService(fakeBreakpointObserver);

    mediaService.onResize$.subscribe((mediaInfo: MediaInfo) => {
      expect(mediaInfo.code).toBe(MediaCode.TabletLandscape);
      expect(mediaInfo.className).toBe(MediaClass.TabletLandscape);
    });
  });

  it(`should be code ${MediaCode.TablePortrait} and class ${MediaClass.TablePortrait}`, () => {
    const fakeBreakpointState: BreakpointState = {
      matches: true,
      breakpoints: {
        [MediaScreenSize.TablePortrait]: true,
      },
    };

    const fakeBreakpointObserver = jasmine.createSpyObj<BreakpointObserver>('BreakpointObserver', {
      observe: of(fakeBreakpointState),
    });

    const mediaService: MediaService = new MediaService(fakeBreakpointObserver);

    mediaService.onResize$.subscribe((mediaInfo: MediaInfo) => {
      expect(mediaInfo.code).toBe(MediaCode.TablePortrait);
      expect(mediaInfo.className).toBe(MediaClass.TablePortrait);
    });
  });
});
