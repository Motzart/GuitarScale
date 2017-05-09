import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarNeckComponent } from './guitar-neck.component';

describe('GuitarNeckComponent', () => {
  let component: GuitarNeckComponent;
  let fixture: ComponentFixture<GuitarNeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarNeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarNeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
