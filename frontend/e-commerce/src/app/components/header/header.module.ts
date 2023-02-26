import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { CartModule } from './cart/cart.module';
import { LanguageModule } from './language/language.module';
import { LocationModule } from './location/location.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, CartModule, LanguageModule, LocationModule, NavbarModule],
})
export class HeaderModule {}
