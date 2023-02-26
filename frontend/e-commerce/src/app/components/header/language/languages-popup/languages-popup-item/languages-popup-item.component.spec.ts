import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesPopupItemComponent } from './languages-popup-item.component';

describe('LanguagesPopupItemComponent', () => {
  let component: LanguagesPopupItemComponent;
  let fixture: ComponentFixture<LanguagesPopupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagesPopupItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagesPopupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
