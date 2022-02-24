import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOfferingsComponent } from './product-offerings.component';

describe('ProductOfferingsComponent', () => {
  let component: ProductOfferingsComponent;
  let fixture: ComponentFixture<ProductOfferingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOfferingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
