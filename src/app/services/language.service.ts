import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
const body = document.getElementsByTagName('body')[0];
type direction = 'ltr' | 'rtl';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  selected = '';
  dir: direction = 'ltr';
  languageSubject = new BehaviorSubject({ selected: '', dir: '' });
  constructor(private translate: TranslateService) {
    this.ar();
    // this.checkLanguageFromLoaclStorage();
  }
  checkLanguageFromLoaclStorage() {
    if (localStorage.getItem('lang') == 'ar') {
      this.ar();
    } else {
      this.en();
    }
  }
  changeLangeuage() {
    if (this.selected == 'en') this.ar();
    else this.en();
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    this.selected = lang;
    localStorage.setItem('lang', lang);
  }
  setDirection(dir: direction) {
    this.dir = dir;
  }

  ar() {
    this.setLanguage('ar');
    this.setDirection('rtl');
    body.setAttribute('dir', this.dir);
    this.languageSubject.next({ selected: this.selected, dir: this.dir });
  }
  en() {
    this.setLanguage('en');
    this.setDirection('ltr');
    body.setAttribute('dir', this.dir);
    this.languageSubject.next({ selected: this.selected, dir: this.dir });
  }
}
