import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista10Component } from './vista10.component';

describe('Vista10Component', () => {
  let component: Vista10Component;
  let fixture: ComponentFixture<Vista10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vista10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vista10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
