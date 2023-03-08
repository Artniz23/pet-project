import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarMobileComponent } from './navbar-mobile.component';
import { LogoModule } from '../logo/logo.module';

@NgModule({
  declarations: [NavbarMobileComponent],
  exports: [NavbarMobileComponent],
  imports: [CommonModule, LogoModule],
})
export class NavbarMobileModule {}
