import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSelectedMsgComponent } from './not-selected-msg.component';

describe('NotSelectedMsgComponent', () => {
  let component: NotSelectedMsgComponent;
  let fixture: ComponentFixture<NotSelectedMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotSelectedMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotSelectedMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
