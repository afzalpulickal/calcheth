import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalExamComponent } from './external-exam.component';

describe('ExternalExamComponent', () => {
  let component: ExternalExamComponent;
  let fixture: ComponentFixture<ExternalExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
