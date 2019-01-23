import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEndGameComponent } from './message-end-game.component';

describe('MessageEndGameComponent', () => {
  let component: MessageEndGameComponent;
  let fixture: ComponentFixture<MessageEndGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageEndGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageEndGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
