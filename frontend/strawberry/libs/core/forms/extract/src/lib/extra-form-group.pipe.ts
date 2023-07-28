import { Pipe, PipeTransform } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Pipe({
  name: 'extraFormGroup'
})
export class ExtraFormGroupPipe implements PipeTransform {

  transform(formGroup: FormGroup, controlName: string): FormGroup {
    const group = formGroup.get(controlName) as FormGroup | null;

    if (!group) {
      console.error(`Form group with name ${controlName} is not found`);
    }

    return group ?? new FormGroup({});
  }

}
