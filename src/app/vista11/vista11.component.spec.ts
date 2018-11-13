import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vista11Component } from './vista11.component';

describe('Vista11Component', () => {
  let component: Vista11Component;
  let fixture: ComponentFixture<Vista11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vista11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vista11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
