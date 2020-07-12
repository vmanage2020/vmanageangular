import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginaddComponent } from './loginadd.component';

describe('LoginaddComponent', () => {
  let component: LoginaddComponent;
  let fixture: ComponentFixture<LoginaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
