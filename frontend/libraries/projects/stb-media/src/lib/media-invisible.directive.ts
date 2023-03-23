import { Directive, Inject, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { MediaService } from './media.service';
import { DestroyService } from 'stb-destroy';
import { Observable, takeUntil, tap } from 'rxjs';
import { MediaInfo } from './media-info';

/**
 * Directive for hiding HtmlElement or Component in specific screen size
 */
@Directive({
  selector: '[appMediaInvisible]',
  providers: [DestroyService],
})
export class MediaInvisibleDirective implements OnInit {
  @Input() public appMediaInvisible!: string;

  private hasView = false;

  private prevBreakpoints?: string;

  private breakpointCodes: Set<string> = new Set<string>();

  private isMatch = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private mediaService: MediaService,
    @Inject(DestroyService) private destroy: Observable<void>,
  ) {}

  public ngOnInit(): void {
    if (!this.appMediaInvisible) {
      return;
    }

    this.mediaService.onResize$
      .pipe(
        tap((mediaInfo: MediaInfo) => {
          if (this.prevBreakpoints !== this.appMediaInvisible) {
            this.cacheBreakpoints();
          }

          this.checkVisible(mediaInfo);
        }),
        takeUntil(this.destroy),
      )
      .subscribe();
  }

  private checkVisible(mediaInfo: MediaInfo): void {
    this.isMatch = this.breakpointCodes.has(mediaInfo.code);

    if (this.isMatch && this.hasView) {
      this.clear();
    } else if (!this.isMatch && !this.hasView) {
      this.show();
    }
  }

  private cacheBreakpoints(): void {
    this.breakpointCodes.clear();

    for (const code of this.appMediaInvisible.split(',')) {
      this.breakpointCodes.add(code);
    }

    this.prevBreakpoints = this.appMediaInvisible;
  }

  private clear(): void {
    this.viewContainer.clear();
    this.hasView = false;
  }

  private show(): void {
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.hasView = true;
  }
}
