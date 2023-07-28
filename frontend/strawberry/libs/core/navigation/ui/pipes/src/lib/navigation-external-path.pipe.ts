import { Pipe, PipeTransform } from '@angular/core';

import {NavigationService} from "@strawberry/core/navigation/service";

@Pipe({
  name: 'externalPath'
})
export class NavigationExternalPathPipe implements PipeTransform {

  constructor(
    private readonly navigationService: NavigationService
  ) {
  }

  transform(path: string, params?: Record<string, string | number>): string {
    return this.navigationService.getRoute(path, params).join('/').slice(1);
  }

}
