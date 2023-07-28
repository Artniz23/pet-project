import { Pipe, PipeTransform } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Pipe({
  name: 'extraFormControl'
})
export class ExtraFormControlPipe implements PipeTransform {

  transform(formGroup: FormGroup, controlName: string): FormControl {
    const control = formGroup.get(controlName) as FormControl | null;

    if (!control) {
      console.error(`From control with name ${controlName} is not found`);
    }

    return control ?? new FormControl();
  }

}
