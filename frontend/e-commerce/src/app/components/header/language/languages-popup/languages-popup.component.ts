import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Language } from '../enums/language';

@Component({
  selector: 'app-languages-popup',
  templateUrl: './languages-popup.component.html',
  styleUrls: ['./languages-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesPopupComponent {
  public language: typeof Language = Language;
}
