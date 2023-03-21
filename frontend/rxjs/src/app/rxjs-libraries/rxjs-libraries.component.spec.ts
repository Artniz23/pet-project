import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsLibrariesComponent } from './rxjs-libraries.component';

describe('RxjsLibrariesComponent', () => {
  let component: RxjsLibrariesComponent;
  let fixture: ComponentFixture<RxjsLibrariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsLibrariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsLibrariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
