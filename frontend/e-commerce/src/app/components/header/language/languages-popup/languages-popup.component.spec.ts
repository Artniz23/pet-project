import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesPopupComponent } from './languages-popup.component';

describe('LanguagesPopupComponent', () => {
  let component: LanguagesPopupComponent;
  let fixture: ComponentFixture<LanguagesPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagesPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
