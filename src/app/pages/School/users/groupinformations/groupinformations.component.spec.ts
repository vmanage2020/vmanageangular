import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupinformationsComponent } from './groupinformations.component';

describe('GroupinformationsComponent', () => {
  let component: GroupinformationsComponent;
  let fixture: ComponentFixture<GroupinformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupinformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupinformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
