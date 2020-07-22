import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentselectionviewComponent } from './studentselectionview.component';

describe('StudentselectionviewComponent', () => {
  let component: StudentselectionviewComponent;
  let fixture: ComponentFixture<StudentselectionviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentselectionviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentselectionviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
