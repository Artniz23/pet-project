import { MediaInfo } from '../../classes/media/media-info';
import { MediaService } from '../../services/media/media.service';
import { of } from 'rxjs';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import SpyObj = jasmine.SpyObj;
import { By } from '@angular/platform-browser';
import { MediaClassDirective } from './media-class.directive';
import { MediaClass, MediaCode } from '../../classes/media/media-breakpoint';

describe('MediaClassDirective: Test element classes', () => {
  @Component({
    template: `<div appMediaClass></div>`,
  })
  class TestComponent {}

  let fixture: ComponentFixture<TestComponent>;
  let fakeMediaService: SpyObj<MediaService>;

  describe(`MediaClassDirective: Test ${MediaClass.WebLandscape} class`, () => {
    const mediaInfo = new MediaInfo(MediaCode.WebLandscape, MediaClass.WebLandscape);

    beforeEach(async () => {
      fakeMediaService = jasmine.createSpyObj<MediaService>(
        'MediaService',
        {},
        {
          onResize$: of(mediaInfo),
        },
      );

      await TestBed.configureTestingModule({
        declarations: [TestComponent, MediaClassDirective],
        providers: [{ provide: MediaService, useValue: fakeMediaService }],
      }).compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
    });

    it(`should div element has class ${MediaClass.WebLandscape}`, () => {
      const el: HTMLElement = fixture.debugElement.query(
        By.directive(MediaClassDirective),
      ).nativeElement;

      expect(el).toBeTruthy();
      expect(el.classList.contains(MediaClass.WebLandscape)).toBeTruthy();
      expect(el.classList.contains(MediaClass.TabletLandscape)).toBeFalsy();
      expect(el.classList.contains(MediaClass.TablePortrait)).toBeFalsy();
      expect(el.classList.contains(MediaClass.Mobile)).toBeFalsy();
    });
  });

  describe(`MediaClassDirective: Test ${MediaClass.TabletLandscape} class`, () => {
    const mediaInfo = new MediaInfo(MediaCode.TabletLandscape, MediaClass.TabletLandscape);

    beforeEach(async () => {
      fakeMediaService = jasmine.createSpyObj<MediaService>(
        'MediaService',
        {},
        {
          onResize$: of(mediaInfo),
        },
      );

      await TestBed.configureTestingModule({
        declarations: [TestComponent, MediaClassDirective],
        providers: [{ provide: MediaService, useValue: fakeMediaService }],
      }).compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
    });

    it(`should div element has class ${MediaClass.TabletLandscape}`, () => {
      const el: HTMLElement = fixture.debugElement.query(
        By.directive(MediaClassDirective),
      ).nativeElement;

      expect(el).toBeTruthy();
      expect(el.classList.contains(MediaClass.WebLandscape)).toBeFalsy();
      expect(el.classList.contains(MediaClass.TabletLandscape)).toBeTruthy();
      expect(el.classList.contains(MediaClass.TablePortrait)).toBeFalsy();
      expect(el.classList.contains(MediaClass.Mobile)).toBeFalsy();
    });
  });

  describe(`MediaClassDirective: Test ${MediaClass.TablePortrait} class`, () => {
    const mediaInfo = new MediaInfo(MediaCode.TablePortrait, MediaClass.TablePortrait);

    beforeEach(async () => {
      fakeMediaService = jasmine.createSpyObj<MediaService>(
        'MediaService',
        {},
        {
          onResize$: of(mediaInfo),
        },
      );

      await TestBed.configureTestingModule({
        declarations: [TestComponent, MediaClassDirective],
        providers: [{ provide: MediaService, useValue: fakeMediaService }],
      }).compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
    });

    it(`should div element has class ${MediaClass.TablePortrait}`, () => {
      const el: HTMLElement = fixture.debugElement.query(
        By.directive(MediaClassDirective),
      ).nativeElement;

      expect(el).toBeTruthy();
      expect(el.classList.contains(MediaClass.WebLandscape)).toBeFalsy();
      expect(el.classList.contains(MediaClass.TabletLandscape)).toBeFalsy();
      expect(el.classList.contains(MediaClass.TablePortrait)).toBeTruthy();
      expect(el.classList.contains(MediaClass.Mobile)).toBeFalsy();
    });
  });

  describe(`MediaClassDirective: Test ${MediaClass.Mobile} class`, () => {
    const mediaInfo = new MediaInfo(MediaCode.Mobile, MediaClass.Mobile);

    beforeEach(async () => {
      fakeMediaService = jasmine.createSpyObj<MediaService>(
        'MediaService',
        {},
        {
          onResize$: of(mediaInfo),
        },
      );

      await TestBed.configureTestingModule({
        declarations: [TestComponent, MediaClassDirective],
        providers: [{ provide: MediaService, useValue: fakeMediaService }],
      }).compileComponents();

      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
    });

    it(`should div element has class ${MediaClass.Mobile}`, () => {
      const el: HTMLElement = fixture.debugElement.query(
        By.directive(MediaClassDirective),
      ).nativeElement;

      expect(el).toBeTruthy();
      expect(el.classList.contains(MediaClass.WebLandscape)).toBeFalsy();
      expect(el.classList.contains(MediaClass.TabletLandscape)).toBeFalsy();
      expect(el.classList.contains(MediaClass.TablePortrait)).toBeFalsy();
      expect(el.classList.contains(MediaClass.Mobile)).toBeTruthy();
    });
  });
});
