import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCategoryBannerComponent } from './final-category-banner.component';

describe('FinalCategoryBannerComponent', () => {
  let component: FinalCategoryBannerComponent;
  let fixture: ComponentFixture<FinalCategoryBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalCategoryBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalCategoryBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
