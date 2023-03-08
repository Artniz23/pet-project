import { Directive, ElementRef, Inject } from '@angular/core';
import { MediaService } from '../../services/media/media.service';
import { DestroyService } from '../../services/destroy-service/destroy.service';
import { Observable, takeUntil, tap } from 'rxjs';
import { MediaInfo } from '../../classes/media/media-info';

@Directive({
  selector: '[appMediaClass]',
  providers: [DestroyService],
})
export class MediaClassDirective {
  private htmlElement: HTMLElement;

  private readonly initialClass: string;

  constructor(
    elementRef: ElementRef<HTMLElement>,
    mediaService: MediaService,
    @Inject(DestroyService) destroy: Observable<void>,
  ) {
    this.htmlElement = elementRef.nativeElement;

    this.initialClass = this.htmlElement.className;

    mediaService.onResize$
      .pipe(
        tap((mediaInfo: MediaInfo) => {
          this.resolveClasses(mediaInfo);
        }),
        takeUntil(destroy),
      )
      .subscribe();
  }

  private resolveClasses(mediaInfo: MediaInfo): void {
    this.htmlElement.className = this.initialClass;

    this.htmlElement.classList.add(mediaInfo.className);
  }
}
