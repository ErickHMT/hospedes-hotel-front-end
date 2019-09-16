import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInFilterComponent } from './check-in-filter.component';

describe('CheckInFilterComponent', () => {
  let component: CheckInFilterComponent;
  let fixture: ComponentFixture<CheckInFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
