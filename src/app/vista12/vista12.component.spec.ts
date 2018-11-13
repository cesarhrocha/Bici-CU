import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista12Component } from './vista12.component';

describe('Vista12Component', () => {
  let component: Vista12Component;
  let fixture: ComponentFixture<Vista12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vista12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vista12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
