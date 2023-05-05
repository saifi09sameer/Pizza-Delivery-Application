import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllUsersWithAmountComponent } from './view-all-users-with-amount.component';

describe('ViewAllUsersWithAmountComponent', () => {
  let component: ViewAllUsersWithAmountComponent;
  let fixture: ComponentFixture<ViewAllUsersWithAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllUsersWithAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllUsersWithAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
