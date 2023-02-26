import { Injectable } from '@angular/core';
import { Language } from '../enums/language';
import { LanguageInfo } from '../interfaces/language-info';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private defaultLanguage: LanguageInfo = {
    country: 'ru',
    description: 'Русский',
    selected: true,
  };

  private languages: Map<Language, LanguageInfo> = new Map<Language, LanguageInfo>([
    [Language.RU, this.defaultLanguage],
    [
      Language.EN,
      {
        country: 'en',
        description: 'English',
        selected: false,
      },
    ],
  ]);

  public getLanguage(language: Language): LanguageInfo {
    return this.languages.get(language) ?? this.defaultLanguage;
  }
}
