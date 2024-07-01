import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderbagComponent } from './orderbag.component';

describe('OrderbagComponent', () => {
  let component: OrderbagComponent;
  let fixture: ComponentFixture<OrderbagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderbagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderbagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
