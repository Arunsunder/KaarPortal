import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OveralldashboardComponent } from './overalldashboard.component';

describe('OveralldashboardComponent', () => {
  let component: OveralldashboardComponent;
  let fixture: ComponentFixture<OveralldashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OveralldashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OveralldashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
