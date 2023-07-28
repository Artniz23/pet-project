import {filter, Observable} from "rxjs";

export function inputIsNotNullOrUndefined<T>(input: T | null | undefined): input is T {
  return input !== null && input !== undefined;
}

export function isNotNullOrUndefined<T>() {
  return (source$: Observable<T | null | undefined>): Observable<T> => source$.pipe(filter(inputIsNotNullOrUndefined));
}
