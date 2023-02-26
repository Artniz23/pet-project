import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';
import { LanguagesPopupComponent } from './languages-popup/languages-popup.component';
import { LanguagesPopupItemComponent } from './languages-popup/languages-popup-item/languages-popup-item.component';

@NgModule({
  declarations: [LanguageComponent, LanguagesPopupComponent, LanguagesPopupItemComponent],
  exports: [LanguageComponent],
  imports: [CommonModule],
})
export class LanguageModule {}
