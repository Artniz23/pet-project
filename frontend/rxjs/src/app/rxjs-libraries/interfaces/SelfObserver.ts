export interface SelfObserver<T> {
  next: (value: T) => void;
  complete: () => void;
  error?: (err: any) => void;
}
