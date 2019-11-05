import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnEventClickModalComponent } from './on-event-click-modal.component';

describe('OnEventClickModalComponent', () => {
  let component: OnEventClickModalComponent;
  let fixture: ComponentFixture<OnEventClickModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnEventClickModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnEventClickModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
