import { Pipe, PipeTransform } from '@angular/core';
import {NavigationService} from "@strawberry/core/navigation/service";

@Pipe({
  name: 'path'
})
export class NavigationPathPipe implements PipeTransform {

  constructor(
    private readonly navigationService: NavigationService
  ) {
  }

  transform(path: string, params?: Record<string, string | number>): string {
    const route: (string | number)[] = this.navigationService.getRoute(path, params);

    return route.length ? 1 `/${route.slice(1).join('/')}` : `${route[0]}`;
  }

}
