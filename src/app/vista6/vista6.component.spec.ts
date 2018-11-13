import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista6Component } from './vista6.component';

describe('Vista6Component', () => {
  let component: Vista6Component;
  let fixture: ComponentFixture<Vista6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vista6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vista6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
