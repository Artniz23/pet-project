import { SelfObserver } from '../interfaces/SelfObserver';
import { SelfSubscription } from './SelfSubscription';

export class SelfSubscriber<T> {
  public closed = false;

  constructor(
    private destination: Partial<SelfObserver<T>>,
    private subscription: SelfSubscription,
  ) {
    // Make sure that if the subscription is unsubscribed,
    // we don't let any more notifications through this subscriber.
    subscription.add(() => (this.closed = true));
  }

  public next(value: T) {
    if (!this.closed) {
      this.destination.next?.(value);
    }
  }

  public complete() {
    if (!this.closed) {
      this.closed = true;
      this.destination.complete?.();
      this.subscription.unsubscribe();
    }
  }

  public error(err: any) {
    if (!this.closed) {
      this.closed = true;
      this.destination.error?.(err);
      this.subscription.unsubscribe();
    }
  }
}
