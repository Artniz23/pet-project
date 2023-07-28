import {ComponentFixture} from "@angular/core/testing";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

export class PageObject<T = unknown> {
  protected readonly fixture: ComponentFixture<T>;

  constructor(fixture: ComponentFixture<T>) {
    this.fixture = fixture;
  }

  protected getByAutomationId(automationId: string): DebugElement | null {
    return this.fixture.debugElement.query(By.css(`[automation-id="${automationId}"]`)) ?? null;
  }

  protected getAllByAutomationId(automationId: string): DebugElement[] {
    return this.fixture.debugElement.queryAll(By.css(`[automation-id="${automationId}"]`));
  }

  protected text(element: DebugElement | string): string | null {
    const el = element instanceof DebugElement ? element : this.getByAutomationId(element);

    if (!el) {
      return null;
    }

    const htmlElement: HTMLElement = el.nativeElement;

    return htmlElement.textContent.trim();
  }

  protected triggerEventHandler(
    element: DebugElement | string | null,
    eventName: string,
    eventObj: unknown | null = null
  ): void {
    if (element === null) {
      console.warn(`Element on triggerEventHandler is NULL`);

      return;
    }

    const el = element instanceof DebugElement ? element : this.getByAutomationId(element);

    if (!el) {
      return;
    }

    el.triggerEventHandler(eventName, eventObj);
  }
}
