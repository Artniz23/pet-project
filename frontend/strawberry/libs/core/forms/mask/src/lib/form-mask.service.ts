import { Injectable } from '@angular/core';
import { MaskedNumberOptions,MaskedOptions } from 'imask';

@Injectable({
  providedIn: 'root'
})
export class FormMaskService {
  getPhoneMask(): MaskedOptions {
    return {
      mask: '+0 000 000 0000'
    }
  }

  getNumberMask(options: MaskedNumberOptions): MaskedNumberOptions {
    return {
      mask: Number,
      min: options?.min ?? undefined,
      max: options?.max ?? undefined,
      thousandsSeparator: options?.thousandsSeparator ?? ','
    }
  }
}
