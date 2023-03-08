import { MediaInfo } from './media-info';

export class MediaCode {
  public static WebLandscape = 'wl';

  public static TabletLandscape = 'tl';

  public static TablePortrait = 'tp';
}

export class MediaClass {
  public static WebLandscape = 'web-landscape';

  public static TabletLandscape = 'tablet-landscape';

  public static TablePortrait = 'tablet-portrait';
}

export class MediaScreenSize {
  public static WebLandscape = '(min-width: 1202px)';

  public static TabletLandscape = '(max-width: 1201px) and (min-width: 842px)';

  public static TablePortrait = '(max-width: 841px) and (min-width: 602px)';
}

export class MediaBreakpoint {
  public static list: Map<string, MediaInfo> = new Map<string, MediaInfo>([
    [MediaScreenSize.WebLandscape, new MediaInfo(MediaCode.WebLandscape, MediaClass.WebLandscape)],
    [
      MediaScreenSize.TabletLandscape,
      new MediaInfo(MediaCode.TabletLandscape, MediaClass.TabletLandscape),
    ],
    [
      MediaScreenSize.TablePortrait,
      new MediaInfo(MediaCode.TablePortrait, MediaClass.TablePortrait),
    ],
  ]);
}
