import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmanagementComponent } from './studentmanagement.component';

describe('StudentmanagementComponent', () => {
  let component: StudentmanagementComponent;
  let fixture: ComponentFixture<StudentmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
