import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerfinancialComponent } from './customerfinancial.component';

describe('CustomerfinancialComponent', () => {
  let component: CustomerfinancialComponent;
  let fixture: ComponentFixture<CustomerfinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerfinancialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerfinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
