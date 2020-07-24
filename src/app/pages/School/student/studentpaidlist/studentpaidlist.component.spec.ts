import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpaidlistComponent } from './studentpaidlist.component';

describe('StudentpaidlistComponent', () => {
  let component: StudentpaidlistComponent;
  let fixture: ComponentFixture<StudentpaidlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentpaidlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentpaidlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
