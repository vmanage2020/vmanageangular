import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuentlistComponent } from './stuentlist.component';

describe('StuentlistComponent', () => {
  let component: StuentlistComponent;
  let fixture: ComponentFixture<StuentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
