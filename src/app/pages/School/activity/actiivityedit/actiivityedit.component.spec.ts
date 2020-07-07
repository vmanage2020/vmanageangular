import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiivityeditComponent } from './actiivityedit.component';

describe('ActiivityeditComponent', () => {
  let component: ActiivityeditComponent;
  let fixture: ComponentFixture<ActiivityeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiivityeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiivityeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
