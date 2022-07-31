import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorfinancialComponent } from './vendorfinancial.component';

describe('VendorfinancialComponent', () => {
  let component: VendorfinancialComponent;
  let fixture: ComponentFixture<VendorfinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorfinancialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorfinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
