import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesContainerComponent } from './languages-container.component';
import { LanguagesItemComponent } from './languages-item/languages-item.component';

@NgModule({
  declarations: [LanguagesContainerComponent, LanguagesItemComponent],
  exports: [LanguagesContainerComponent, LanguagesItemComponent],
  imports: [CommonModule],
})
export class LanguagesContainerModule {}
