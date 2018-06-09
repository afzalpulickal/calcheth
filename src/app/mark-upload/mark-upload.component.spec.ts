import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkUploadComponent } from './mark-upload.component';

describe('MarkUploadComponent', () => {
  let component: MarkUploadComponent;
  let fixture: ComponentFixture<MarkUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
