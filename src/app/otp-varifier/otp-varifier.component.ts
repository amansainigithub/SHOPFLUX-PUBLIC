import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-otp-varifier',
  templateUrl: './otp-varifier.component.html',
  styleUrls: ['./otp-varifier.component.css']
})
export class OtpVarifierComponent implements OnInit {

  constructor(private _tss:TokenStorageService,private _ar:ActivatedRoute,private _authService:AuthService) { }

  otpVerifierForm:any={
    "otp":"",
    "email":""
  }

  btnLocked:any = "N";
  regSuccess = "N";
  warningMessage="N";

  ngOnInit(): void {
  }

  otpVerify()
  {
    this.btnLocked = "Y";

    let email =  this._ar.snapshot.params.email;
    console.log(email);
    
    this.otpVerifierForm.email = email ;

    this._authService.otpVerifyService(this.otpVerifierForm).subscribe(data=>{

      this.regSuccess = "Y";
      
    },error=>{
      console.log(error);
      this.warningMessage = "Y"
       this.btnLocked = "N";
      
    })
  }

}
