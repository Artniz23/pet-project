import {ChangeDetectorRef, DestroyRef, Directive, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {extractTouchedChanges} from "@strawberry/core/forms/utils";
import {tap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Directive({
  selector: '[strawberryExtractTouched]'
})
export class ExtractTouchedDirective implements OnInit {
  @Input() control?: FormControl;

  @Input() children?: FormControl | FormControl[];

  constructor(
    private readonly cdRef: ChangeDetectorRef,
    private readonly destroyRef: DestroyRef
  ) {
  }

  ngOnInit(): void {
    if (!this.control) {
      console.error(`Control is not found on extract touched`);

      return;
    }

    extractTouchedChanges(this.control)
      .pipe(
        tap(() => {
          this.cdRef.markForCheck();

          if (!this.children) {
            return;
          }

          if (Array.isArray(this.children)) {
            this.children.forEach((control) => control.markAsTouched())
          } else {
            this.children.markAsTouched();
          }
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
