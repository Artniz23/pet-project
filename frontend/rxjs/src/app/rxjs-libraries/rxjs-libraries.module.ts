import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsLibrariesComponent } from './rxjs-libraries.component';



@NgModule({
  declarations: [
    RxjsLibrariesComponent
  ],
  exports: [
    RxjsLibrariesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RxjsLibrariesModule { }
