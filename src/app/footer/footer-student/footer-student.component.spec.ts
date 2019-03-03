import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStudentComponent } from './footer-student.component';

describe('FooterStudentComponent', () => {
  let component: FooterStudentComponent;
  let fixture: ComponentFixture<FooterStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
