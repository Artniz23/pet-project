import { MediaInvisibleDirective } from './media-invisible.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugNode, TemplateRef, ViewContainerRef } from '@angular/core';
import { MediaService } from '../../services/media/media.service';
import { of, Subject } from 'rxjs';
import { By } from '@angular/platform-browser';
import SpyObj = jasmine.SpyObj;
import { MediaInfo } from '../../classes/media/media-info';
import { MediaBreakpoint, MediaClass, MediaCode } from '../../classes/media/media-breakpoint';

describe('MediaInvisibleDirective: Test MediaInvisibleDirective class', () => {
  let directive: any;

  const mediaInfo = new MediaInfo(MediaCode.WebLandscape, MediaClass.WebLandscape);

  beforeEach(async () => {
    const fakeMediaService = jasmine.createSpyObj<MediaService>(
      'MediaService',
      {},
      {
        onResize$: of(mediaInfo),
      },
    );

    const fakeTemplateRef = jasmine.createSpyObj<TemplateRef<any>>('TemplateRef', [
      'createEmbeddedView',
    ]);
    const fakeViewContainer = jasmine.createSpyObj<ViewContainerRef>('ViewContainerRef', [
      'clear',
      'createEmbeddedView',
    ]);
    const subject = new Subject<void>();

    directive = new MediaInvisibleDirective(
      fakeTemplateRef,
      fakeViewContainer,
      fakeMediaService,
      subject,
    );
  });

  it(`should be match and not has view on ${MediaCode.WebLandscape}`, () => {
    directive.appMediaInvisible = 'wl';
    directive.ngOnInit();

    expect(directive.isMatch).toBeTruthy();
    expect(directive.hasView).toBeFalsy();
  });

  it(`should not be match and has view on ${MediaCode.TabletLandscape}`, () => {
    directive.appMediaInvisible = 'tl';
    directive.ngOnInit();

    expect(directive.isMatch).toBeFalsy();
    expect(directive.hasView).toBeTruthy();
  });

  it('should not be match and has view with incorrect data', () => {
    directive.appMediaInvisible = 'incorrect';
    directive.ngOnInit();

    expect(directive.isMatch).toBeFalsy();
    expect(directive.hasView).toBeTruthy();
  });

  it('should be check visible 3 times but cache breakpoints only once', () => {
    spyOn<any>(directive, 'checkVisible').and.callThrough();
    spyOn<any>(directive, 'cacheBreakpoints').and.callThrough();

    directive.appMediaInvisible = 'wl,tl,tp';
    directive.ngOnInit();
    directive.ngOnInit();
    directive.ngOnInit();

    expect(directive.checkVisible).toHaveBeenCalledTimes(3);
    expect(directive.cacheBreakpoints).toHaveBeenCalledTimes(1);
  });
});

describe('MediaInvisibleDirective: Test count of breakpoints', () => {
  it('should be 3 breakpoints', () => {
    expect(MediaBreakpoint.list.size).toBe(3);
  });
});

describe(`MediaInvisibleDirective: Test directive with ${MediaCode.WebLandscape} breakpoint`, () => {
  const screenSize = MediaCode.WebLandscape;

  @Component({
    template: ` <div *appMediaInvisible="screenSize" [id]="screenSize"></div> `,
  })
  class TestComponent {
    screenSize = MediaCode.WebLandscape;
  }

  const mediaInfo = new MediaInfo(MediaCode.WebLandscape, MediaClass.WebLandscape);

  let fixture: ComponentFixture<TestComponent>;
  let fakeMediaService: SpyObj<MediaService>;
  let directive: MediaInvisibleDirective;

  beforeEach(async () => {
    fakeMediaService = jasmine.createSpyObj<MediaService>(
      'MediaService',
      {},
      {
        onResize$: of(mediaInfo),
      },
    );

    await TestBed.configureTestingModule({
      declarations: [TestComponent, MediaInvisibleDirective],
      providers: [{ provide: MediaService, useValue: fakeMediaService }],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it(`should exists appMediaInvisible on ${screenSize}`, () => {
    const el: DebugNode[] = fixture.debugElement.queryAllNodes(
      By.directive(MediaInvisibleDirective),
    );

    const debugNode: DebugNode = el[0];

    directive = debugNode.injector.get(MediaInvisibleDirective);

    expect(directive.appMediaInvisible).toBeTruthy();
  });

  it(`should div element hidden on ${screenSize}`, () => {
    const el = fixture.debugElement.query(By.css(`#${screenSize}`));

    expect(el).toBeNull();
  });
});

describe(`MediaInvisibleDirective: Test directive with ${MediaCode.TabletLandscape} breakpoint`, () => {
  const screenSize = MediaCode.TabletLandscape;

  @Component({
    template: ` <div *appMediaInvisible="screenSize" [id]="screenSize"></div> `,
  })
  class TestComponent {
    screenSize = MediaCode.TabletLandscape;
  }

  const mediaInfo = new MediaInfo(MediaCode.TabletLandscape, MediaClass.TabletLandscape);

  let fixture: ComponentFixture<TestComponent>;
  let fakeMediaService: SpyObj<MediaService>;
  let directive: MediaInvisibleDirective;

  beforeEach(async () => {
    fakeMediaService = jasmine.createSpyObj<MediaService>(
      'MediaService',
      {},
      {
        onResize$: of(mediaInfo),
      },
    );

    await TestBed.configureTestingModule({
      declarations: [TestComponent, MediaInvisibleDirective],
      providers: [{ provide: MediaService, useValue: fakeMediaService }],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it(`should exists appMediaInvisible on ${screenSize}`, () => {
    const el: DebugNode[] = fixture.debugElement.queryAllNodes(
      By.directive(MediaInvisibleDirective),
    );

    const debugNode: DebugNode = el[0];

    directive = debugNode.injector.get(MediaInvisibleDirective);

    expect(directive.appMediaInvisible).toBeTruthy();
  });

  it(`should div element hidden on ${screenSize}`, () => {
    const el = fixture.debugElement.query(By.css(`#${screenSize}`));

    expect(el).toBeNull();
  });
});

describe(`MediaInvisibleDirective: Test directive with ${MediaCode.TablePortrait} breakpoint`, () => {
  const screenSize = MediaCode.TablePortrait;

  @Component({
    template: ` <div *appMediaInvisible="screenSize" [id]="screenSize"></div> `,
  })
  class TestComponent {
    screenSize = MediaCode.TablePortrait;
  }

  const mediaInfo = new MediaInfo(MediaCode.TablePortrait, MediaClass.TablePortrait);

  let fixture: ComponentFixture<TestComponent>;
  let fakeMediaService: SpyObj<MediaService>;
  let directive: MediaInvisibleDirective;

  beforeEach(async () => {
    fakeMediaService = jasmine.createSpyObj<MediaService>(
      'MediaService',
      {},
      {
        onResize$: of(mediaInfo),
      },
    );

    await TestBed.configureTestingModule({
      declarations: [TestComponent, MediaInvisibleDirective],
      providers: [{ provide: MediaService, useValue: fakeMediaService }],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it(`should exists appMediaInvisible on ${screenSize}`, () => {
    const el: DebugNode[] = fixture.debugElement.queryAllNodes(
      By.directive(MediaInvisibleDirective),
    );

    const debugNode: DebugNode = el[0];

    directive = debugNode.injector.get(MediaInvisibleDirective);

    expect(directive.appMediaInvisible).toBeTruthy();
  });

  it(`should div element hidden on ${screenSize}`, () => {
    const el = fixture.debugElement.query(By.css(`#${screenSize}`));

    expect(el).toBeNull();
  });
});

describe('MediaInvisibleDirective: Test directive with incorrect breakpoint', () => {
  const screenSize = 'incorrect';

  @Component({
    template: ` <div *appMediaInvisible="screenSize" [id]="screenSize"></div> `,
  })
  class TestComponent {
    screenSize = 'incorrect';
  }

  const mediaInfo = new MediaInfo(MediaCode.TablePortrait, MediaClass.TablePortrait);

  let fixture: ComponentFixture<TestComponent>;
  let fakeMediaService: SpyObj<MediaService>;

  beforeEach(async () => {
    fakeMediaService = jasmine.createSpyObj<MediaService>(
      'MediaService',
      {},
      {
        onResize$: of(mediaInfo),
      },
    );

    await TestBed.configureTestingModule({
      declarations: [TestComponent, MediaInvisibleDirective],
      providers: [{ provide: MediaService, useValue: fakeMediaService }],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it(`should div element exist with ${screenSize} breakpoint`, () => {
    const el = fixture.debugElement.query(By.css(`#${screenSize}`));

    expect(el.nativeElement).toBeTruthy();
    expect(el.nativeElement.id).toBe(screenSize);
  });
});

describe(`MediaInvisibleDirective: Test directive with ${MediaCode.WebLandscape} breakpoint and another screen sizes`, () => {
  const screenSize = MediaCode.WebLandscape;

  @Component({
    template: ` <div *appMediaInvisible="screenSize" [id]="screenSize"></div> `,
  })
  class TestComponent {
    screenSize = MediaCode.WebLandscape;
  }

  const mediaInfo = new MediaInfo(MediaCode.TablePortrait, MediaClass.TablePortrait);

  let fixture: ComponentFixture<TestComponent>;
  let fakeMediaService: SpyObj<MediaService>;

  beforeEach(async () => {
    fakeMediaService = jasmine.createSpyObj<MediaService>(
      'MediaService',
      {},
      {
        onResize$: of(mediaInfo),
      },
    );

    await TestBed.configureTestingModule({
      declarations: [TestComponent, MediaInvisibleDirective],
      providers: [{ provide: MediaService, useValue: fakeMediaService }],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it(`should div element exist on ${screenSize} with another screen size`, () => {
    const el = fixture.debugElement.query(By.css(`#${screenSize}`));

    expect(el.nativeElement).toBeTruthy();
    expect(el.nativeElement.id).toBe(screenSize);
  });
});

describe(`MediaInvisibleDirective: Test directive with ${MediaCode.TabletLandscape} breakpoint and another screen sizes`, () => {
  const screenSize = MediaCode.TabletLandscape;

  @Component({
    template: ` <div *appMediaInvisible="screenSize" [id]="screenSize"></div> `,
  })
  class TestComponent {
    screenSize = MediaCode.TabletLandscape;
  }

  const mediaInfo = new MediaInfo(MediaCode.TabletLandscape, MediaClass.TabletLandscape);

  let fixture: ComponentFixture<TestComponent>;
  let fakeMediaService: SpyObj<MediaService>;

  beforeEach(async () => {
    fakeMediaService = jasmine.createSpyObj<MediaService>(
      'MediaService',
      {},
      {
        onResize$: of(mediaInfo),
      },
    );

    await TestBed.configureTestingModule({
      declarations: [TestComponent, MediaInvisibleDirective],
      providers: [{ provide: MediaService, useValue: fakeMediaService }],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it(`should div element hidden on ${screenSize} with another screen size`, () => {
    const el = fixture.debugElement.query(By.css(`#${screenSize}`));

    expect(el).toBeNull();
  });
});
