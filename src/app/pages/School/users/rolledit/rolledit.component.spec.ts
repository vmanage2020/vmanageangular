import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolleditComponent } from './rolledit.component';

describe('RolleditComponent', () => {
  let component: RolleditComponent;
  let fixture: ComponentFixture<RolleditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolleditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
