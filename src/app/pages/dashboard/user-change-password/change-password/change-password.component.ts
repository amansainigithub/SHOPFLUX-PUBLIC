import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';
import { ChangePasswordService } from 'src/app/pb_services/change-password-service/change-password.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private _cps:ChangePasswordService,
              private _tks:TokenStorageService,
              private _router:Router,
              private _snackbar_helper:SnackbarHelperService,
              private _appComp:AppComponent) { }


  errorMessage:any=
  {
    "msg":"null"
  }


  changePasswordForm:any={
    "currentPassword":"",
    "newPassword":"",
    "conformPassword":"",
    "currentUser":""
  }

  ngOnInit(): void {
  }


  changePassword()
  {
      if(this.changePasswordForm.currentPassword =="" || 
            this.changePasswordForm.newPassword  == "" ||
            this.changePasswordForm.conformPassword =="" )
          {
           this.errorMessage.msg = "Please Enter The Fields";
            return;
          }

          if(this.changePasswordForm.currentPassword.length <= 5 || 
            this.changePasswordForm.newPassword.length <= 5 ||
            this.changePasswordForm.conformPassword.length <= 5 )
          {
            this.errorMessage.msg = "Password validation is at least 6 character";
            return;
          }

          if( this.changePasswordForm.newPassword != this.changePasswordForm.conformPassword)
          {
            this.errorMessage.msg = "Password Not Match !";
            return;
          }

          if(this.changePasswordForm.currentPassword.length >= 5 &&  
            this.changePasswordForm.newPassword == 
            this.changePasswordForm.conformPassword )
          {
            this.changePasswordForm.currentUser = this._tks.getUser().username;

            this._cps.changePasswordCurrentUser(this.changePasswordForm).subscribe(data=>{
              localStorage.removeItem("USER_KEY");
              localStorage.removeItem("TOKEN_KEY");
               this._snackbar_helper.
               OpenSnackbar_verticalPosition_top_right("Change Password Success", "",2000);
               window.location.reload();
               

            },error=>{
              console.log(error);
              this._snackbar_helper.
              OpenSnackbar_verticalPosition_top_right("Error", "",2000);
            })

          }
          
  }



}
