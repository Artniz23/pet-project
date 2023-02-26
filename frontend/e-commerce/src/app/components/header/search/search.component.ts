import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  public value: string | null = null;

  public onInput(event: Event): void {
    const inputElement: HTMLInputElement = (event as InputEvent).target as HTMLInputElement;

    this.value = inputElement.value;
  }

  public onClear(): void {
    this.value = null;
  }
}
