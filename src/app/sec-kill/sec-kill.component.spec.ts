import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecKillComponent } from './sec-kill.component';

describe('SecKillComponent', () => {
  let component: SecKillComponent;
  let fixture: ComponentFixture<SecKillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecKillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecKillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
