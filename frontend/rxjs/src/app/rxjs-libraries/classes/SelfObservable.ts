import { SelfObserver } from '../interfaces/SelfObserver';
import { SelfSubscription } from './SelfSubscription';
import { SelfSubscriber } from './SelfSubscriber';

export class SelfObservable<T> {
  constructor(private _wrappedFunc: (subscriber: SelfObserver<T>) => () => void) {}

  subscribe(observer: SelfObserver<T>) {
    const subscription = new SelfSubscription();
    const subscriber = new SelfSubscriber(observer, subscription);
    subscription.add(this._wrappedFunc(subscriber));
    return subscription;
  }
}
