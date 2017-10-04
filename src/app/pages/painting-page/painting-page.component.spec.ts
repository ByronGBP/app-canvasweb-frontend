import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingPageComponent } from './painting-page.component';

describe('PaintingPageComponent', () => {
  let component: PaintingPageComponent;
  let fixture: ComponentFixture<PaintingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
