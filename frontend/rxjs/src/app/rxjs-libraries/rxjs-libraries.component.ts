import {Component, OnInit} from '@angular/core';
import { tap, of, map, switchMap } from './rxjs/src';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-libraries',
  templateUrl: './rxjs-libraries.component.html',
  styleUrls: ['./rxjs-libraries.component.scss']
})
export class RxjsLibrariesComponent implements OnInit {
  private onSub?: any;

  public ngOnInit(): void {
    this.onSub = new Observable((subscriber) => {
      subscriber.next(2);
    })
      .pipe(
        // @ts-ignore
        tap((values: number) => {
          console.log('tap', values);
        }),
        switchMap((values: number) => {
          console.log('switchMap', values);
          return of(values * 2);
        }),
        map((values: number) => {
          console.log('map', values);
          return values * 2;
        }),
      )
      .subscribe((values) => {
        console.log('sub', values);
      });
  }
}
