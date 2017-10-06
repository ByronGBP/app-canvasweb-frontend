import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasPageComponent } from './canvas-page.component';

describe('CanvasPageComponent', () => {
  let component: CanvasPageComponent;
  let fixture: ComponentFixture<CanvasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
