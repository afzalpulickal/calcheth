import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEntryStatusComponent } from './card-entry-status.component';

describe('CardEntryStatusComponent', () => {
  let component: CardEntryStatusComponent;
  let fixture: ComponentFixture<CardEntryStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEntryStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEntryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
