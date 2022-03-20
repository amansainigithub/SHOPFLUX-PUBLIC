import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private authService: AuthService, 
    public tokenStorage: TokenStorageService,
    private _router:Router,
    private _snackbar_helper:SnackbarHelperService,
    
    ) { }

  progressBar:any ={
    dynamicValue:false
  }

  ngOnInit(): void {
  }
  emailValidator:any = "Y";
  resetPassword:any = "N";
  otpSentSuccess:any="N";
  passwordUpdateSuccessfully:any="N";
  enterValidOtp:any="N";

  emailfp:any={
    "email":""
  }

  checkEmailForgetPassword()
  {
    this.progressBar_Starting()

    this.authService.emailForgetPass(this.emailfp).subscribe(data=>{
      console.log(data);
      this.emailValidator = "N";
      this.resetPassword  = "Y";
      this.otpSentSuccess = "Y";
      
      this.progressBar_Stop();
      
    },error=>{
      console.log(error);

      //SNACKBAR
      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("Please Enter Valid Email", "",2000);

      this.progressBar_Stop();
    })
    
  }


  changePasswordForm:any={
    "otp":"",
    "password":"",
    "conformPassword":"",
    "email":""
  }

  //resetPasswordWithOtp
  resetPasswordWithOtp()
  {
    this.progressBar_Starting()

    if(this.changePasswordForm.otp == null || this.changePasswordForm.otp == "" || this.changePasswordForm.otp == undefined)
    {
      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("something went wrong !", "",2000);
    }


    if(this.changePasswordForm.password != this.changePasswordForm.conformPassword)
    {
      this._snackbar_helper.
      OpenSnackbar_verticalPosition_top_right("Password Not Match !", "",2000);
      this.progressBar_Stop();
      return;
    }

   

    this.changePasswordForm.email = this.emailfp.email;
    this.authService.changePasswordByEmailAndOtp(this.changePasswordForm).subscribe(data=>{
      console.log(data);
      this.emailValidator = "N";
      this.resetPassword = "N";
      this.otpSentSuccess = "N"
      this.passwordUpdateSuccessfully = "Y";

       this.progressBar_Stop();
    },error=>{
      console.log(error);
      this.enterValidOtp = "Y";
      this.progressBar_Stop();
    })
  }


  //pROGRESS BAR  
  progressBar_Starting()
  {
    this.progressBar.dynamicValue=true;
  }

  progressBar_Stop()
  {
    this.progressBar.dynamicValue=false;
  }


}
