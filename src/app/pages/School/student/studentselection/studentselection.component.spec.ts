import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentselectionComponent } from './studentselection.component';

describe('StudentselectionComponent', () => {
  let component: StudentselectionComponent;
  let fixture: ComponentFixture<StudentselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
