import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu.component';

@NgModule({
  declarations: [NavMenuComponent],
  exports: [NavMenuComponent],
  imports: [CommonModule],
})
export class NavMenuModule {}
