import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderFieldComponent } from './render-field.component';

describe('RenderFieldComponent', () => {
  let component: RenderFieldComponent;
  let fixture: ComponentFixture<RenderFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
