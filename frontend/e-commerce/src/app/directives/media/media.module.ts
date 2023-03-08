import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaClassDirective } from './media-class.directive';
import { MediaInvisibleDirective } from './media-invisible.directive';

@NgModule({
  declarations: [MediaClassDirective, MediaInvisibleDirective],
  exports: [MediaClassDirective, MediaInvisibleDirective],
  imports: [CommonModule],
})
export class MediaModule {}
