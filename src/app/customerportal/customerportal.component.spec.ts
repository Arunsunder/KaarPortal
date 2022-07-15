import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerportalComponent } from './customerportal.component';

describe('CustomerportalComponent', () => {
  let component: CustomerportalComponent;
  let fixture: ComponentFixture<CustomerportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerportalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
