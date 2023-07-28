import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ExtraFormControlPipe} from './extra-form-control.pipe';
import { ExtraFormGroupPipe } from './extra-form-group.pipe';
import { ExtractTouchedDirective } from './extract-touched.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ExtraFormControlPipe, ExtraFormGroupPipe, ExtractTouchedDirective],
  exports: [ExtraFormControlPipe, ExtraFormGroupPipe, ExtractTouchedDirective],
})
export class FormExtractsModule {
}
