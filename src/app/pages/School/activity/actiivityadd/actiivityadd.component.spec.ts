import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiivityaddComponent } from './actiivityadd.component';

describe('ActiivityaddComponent', () => {
  let component: ActiivityaddComponent;
  let fixture: ComponentFixture<ActiivityaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiivityaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiivityaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
