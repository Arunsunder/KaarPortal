import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsandagingComponent } from './paymentsandaging.component';

describe('PaymentsandagingComponent', () => {
  let component: PaymentsandagingComponent;
  let fixture: ComponentFixture<PaymentsandagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsandagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsandagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
