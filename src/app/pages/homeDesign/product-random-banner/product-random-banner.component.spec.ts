import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRandomBannerComponent } from './product-random-banner.component';

describe('ProductRandomBannerComponent', () => {
  let component: ProductRandomBannerComponent;
  let fixture: ComponentFixture<ProductRandomBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRandomBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRandomBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
