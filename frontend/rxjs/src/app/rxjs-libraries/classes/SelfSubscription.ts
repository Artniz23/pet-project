/**
 * Our subscription type. This is to manage teardowns.
 */
export class SelfSubscription {
  private teardowns = new Set<() => void>();

  add(teardown: () => void) {
    this.teardowns.add(teardown);
  }

  unsubscribe() {
    for (const teardown of this.teardowns) {
      teardown();
    }
    this.teardowns.clear();
  }
}
