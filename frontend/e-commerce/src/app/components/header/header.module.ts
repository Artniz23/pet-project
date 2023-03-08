import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LanguageModule } from './language/language.module';
import { LocationModule } from './location/location.module';
import { NavbarModule } from './navbar/navbar.module';
import { MediaModule } from '../../directives/media/media.module';
import { NavbarMobileModule } from './navbar-mobile/navbar-mobile.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    LanguageModule,
    LocationModule,
    NavbarModule,
    NavbarMobileModule,
    MediaModule,
  ],
})
export class HeaderModule {}
