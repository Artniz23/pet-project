import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Language } from '../enums/language';

@Component({
  selector: 'app-languages-container',
  templateUrl: './languages-container.component.html',
  styleUrls: ['./languages-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesContainerComponent {
  public language: typeof Language = Language;
}
