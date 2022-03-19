import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpVarifierComponent } from './otp-varifier.component';

describe('OtpVarifierComponent', () => {
  let component: OtpVarifierComponent;
  let fixture: ComponentFixture<OtpVarifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpVarifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpVarifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
