import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo.component';
import { MediaModule } from '../../../directives/media/media.module';

@NgModule({
  declarations: [LogoComponent],
  exports: [LogoComponent],
  imports: [CommonModule, MediaModule],
})
export class LogoModule {}
