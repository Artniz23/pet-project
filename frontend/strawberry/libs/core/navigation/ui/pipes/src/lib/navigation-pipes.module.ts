import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NavigationPathPipe} from "./navigation-path.pipe";
import {NavigationExternalPathPipe} from "./navigation-external-path.pipe";

@NgModule({
  declarations: [NavigationPathPipe, NavigationExternalPathPipe],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationPathPipe, NavigationExternalPathPipe
  ]
})
export class NavigationPipesModule {
}
