import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarMobileComponent } from './navbar-mobile.component';
import { LogoModule } from '../logo/logo.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [NavbarMobileComponent],
  exports: [NavbarMobileComponent],
  imports: [CommonModule, LogoModule, MatDialogModule],
})
export class NavbarMobileModule {}
