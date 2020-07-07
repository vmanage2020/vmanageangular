import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiivitylistComponent } from './actiivitylist.component';

describe('ActiivitylistComponent', () => {
  let component: ActiivitylistComponent;
  let fixture: ComponentFixture<ActiivitylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiivitylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiivitylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
