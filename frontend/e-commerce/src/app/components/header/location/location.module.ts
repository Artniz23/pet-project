import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';

@NgModule({
  declarations: [LocationComponent],
  exports: [LocationComponent],
  imports: [CommonModule],
})
export class LocationModule {}
