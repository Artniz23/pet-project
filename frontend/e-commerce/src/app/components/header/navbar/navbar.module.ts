import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { LogoModule } from '../logo/logo.module';
import { MenuButtonModule } from '../menu-button/menu-button.module';
import { SearchModule } from '../search/search.module';
import { NavMenuModule } from './nav-menu/nav-menu.module';
import { MediaModule } from 'stb-media';

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [CommonModule, LogoModule, MenuButtonModule, SearchModule, NavMenuModule, MediaModule],
})
export class NavbarModule {}
