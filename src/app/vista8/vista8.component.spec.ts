import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista8Component } from './vista8.component';

describe('Vista8Component', () => {
  let component: Vista8Component;
  let fixture: ComponentFixture<Vista8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vista8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vista8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
