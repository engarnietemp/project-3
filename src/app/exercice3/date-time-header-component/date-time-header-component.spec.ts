import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeHeaderComponent } from './date-time-header-component';

describe('DateTimeHeaderComponent', () => {
  let component: DateTimeHeaderComponent;
  let fixture: ComponentFixture<DateTimeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateTimeHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateTimeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
