import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmanagementviewComponent } from './studentmanagementview.component';

describe('StudentmanagementviewComponent', () => {
  let component: StudentmanagementviewComponent;
  let fixture: ComponentFixture<StudentmanagementviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentmanagementviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentmanagementviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
