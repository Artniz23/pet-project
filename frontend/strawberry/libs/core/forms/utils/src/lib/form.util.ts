/**
 * Extract arguments of function
 * If F is a subtype of (...args: infer A) => any than return A or never
 */
import {AbstractControl} from "@angular/forms";
import {Observable, Subject} from "rxjs";

export type ArgumentsType<F> = F extends (...args: infer A) => any ? A : never;

/**
 * Creates an object like O. Optionally provide minimum set of properties P which the objects must share to conform
 */
type ObjectLike<O extends Record<string, any>, P extends keyof O = keyof O> = Pick<O, P>;

/**
 * Extract a touched changed observable from an abstract control
 *
 * @param control AbstractControl like object with markAsTouched method
 */
export const extractTouchedChanges = (control: ObjectLike<AbstractControl, 'markAsTouched' | 'markAsUntouched'>): Observable<boolean> => {
  const prevMarkAsTouched = control.markAsTouched;
  const prevMarkAsUntouched = control.markAsUntouched;

  const touchedChanges$: Subject<boolean> = new Subject<boolean>();

  function nextMarkAsTouched(...args: ArgumentsType<AbstractControl['markAsTouched']>) {
    touchedChanges$.next(true);
    prevMarkAsTouched.bind(control)(...args);
  }

  function nextMarkAsUntouched(...args: ArgumentsType<AbstractControl['markAsUntouched']>) {
    touchedChanges$.next(false);
    prevMarkAsUntouched.bind(control)(...args);
  }

  control.markAsTouched = nextMarkAsTouched;
  control.markAsUntouched = nextMarkAsUntouched;

  return touchedChanges$;
}

/**
 * Extract a pristine changed observable from an abstract control
 *
 * @param control AbstractControl like object with markAsPristine method
 */
export const extractPristineChanges = (control: ObjectLike<AbstractControl, 'markAsPristine' | 'markAsDirty'>): Observable<boolean> => {
  const prevMarkAsPristine = control.markAsPristine;
  const prevMarkAsDirty = control.markAsDirty;

  const pristineChanges$: Subject<boolean> = new Subject<boolean>();

  function nextMarkAsPristine(...args: ArgumentsType<AbstractControl['markAsPristine']>) {
    pristineChanges$.next(true);
    prevMarkAsPristine.bind(control)(...args);
  }

  function nextMarkAsDirty(...args: ArgumentsType<AbstractControl['markAsDirty']>) {
    pristineChanges$.next(false);
    prevMarkAsDirty.bind(control)(...args);
  }

  control.markAsPristine = nextMarkAsPristine;
  control.markAsDirty = nextMarkAsDirty;

  return pristineChanges$;
};
