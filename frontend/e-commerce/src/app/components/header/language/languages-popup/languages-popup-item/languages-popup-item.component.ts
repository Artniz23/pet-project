import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Language } from '../../enums/language';
import { LanguageService } from '../../services/language.service';
import { LanguageInfo } from '../../interfaces/language-info';

@Component({
  selector: 'app-languages-popup-item',
  templateUrl: './languages-popup-item.component.html',
  styleUrls: ['./languages-popup-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesPopupItemComponent implements OnInit {
  @Input() public language: Language = Language.RU;

  public country = '';

  public description = '';

  public selected = false;

  constructor(private languageService: LanguageService) {}

  public ngOnInit(): void {
    const languageInfo: LanguageInfo = this.languageService.getLanguage(this.language);

    this.country = languageInfo.country;
    this.description = languageInfo.description;
    this.selected = languageInfo.selected;
  }
}
