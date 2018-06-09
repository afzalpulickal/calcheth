import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkCardsComponent } from './mark-cards.component';

describe('MarkCardsComponent', () => {
  let component: MarkCardsComponent;
  let fixture: ComponentFixture<MarkCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
