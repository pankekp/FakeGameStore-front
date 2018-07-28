import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEndComponent } from './confirm-end.component';

describe('ConfirmEndComponent', () => {
  let component: ConfirmEndComponent;
  let fixture: ComponentFixture<ConfirmEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
