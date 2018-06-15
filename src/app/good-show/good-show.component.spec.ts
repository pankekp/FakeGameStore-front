import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodShowComponent } from './good-show.component';

describe('GoodShowComponent', () => {
  let component: GoodShowComponent;
  let fixture: ComponentFixture<GoodShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
