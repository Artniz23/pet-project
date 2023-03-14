import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';
import { LanguagesContainerModule } from './languages-container/languages-container.module';

@NgModule({
  declarations: [LanguageComponent],
  exports: [LanguageComponent],
  imports: [CommonModule, LanguagesContainerModule],
})
export class LanguageModule {}
