import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdersDetailsComponent } from './view-orders-details.component';

describe('ViewOrdersDetailsComponent', () => {
  let component: ViewOrdersDetailsComponent;
  let fixture: ComponentFixture<ViewOrdersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrdersDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOrdersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
