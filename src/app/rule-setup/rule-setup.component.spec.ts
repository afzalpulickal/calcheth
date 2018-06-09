import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleSetupComponent } from './rule-setup.component';

describe('RuleSetupComponent', () => {
  let component: RuleSetupComponent;
  let fixture: ComponentFixture<RuleSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
