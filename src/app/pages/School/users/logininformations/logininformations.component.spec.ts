import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogininformationsComponent } from './logininformations.component';

describe('LogininformationsComponent', () => {
  let component: LogininformationsComponent;
  let fixture: ComponentFixture<LogininformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogininformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogininformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
