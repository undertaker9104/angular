import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G0021Component } from './g0021.component';

describe('G0021Component', () => {
  let component: G0021Component;
  let fixture: ComponentFixture<G0021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G0021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G0021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
