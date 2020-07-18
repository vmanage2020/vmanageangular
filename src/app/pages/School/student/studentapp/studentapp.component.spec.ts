import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentappComponent } from './studentapp.component';

describe('StudentappComponent', () => {
  let component: StudentappComponent;
  let fixture: ComponentFixture<StudentappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
