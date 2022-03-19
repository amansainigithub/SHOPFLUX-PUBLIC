import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private _router:Router) { }

  ngOnInit(): void {
  }

   
  progressBar:any ={
    dynamicValue:false
  }

  btnLocked:any="N"


  onSubmit(): void {
    const { username, email, password } = this.form;

    this.btnLocked = "Y";
    this.isSignUpFailed = false;
    //Progress bar Start
    this.progressBar_Starting();

    this.authService.register(username, email, password).subscribe(
      data => {         
        this._router.navigateByUrl("/verify-otp/"+email)
        // this.isSuccessful = true;
        // this.isSignUpFailed = false;

         //Progress bar Start
         this.progressBar_Stop();

      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
         //Progress bar Start
         this.progressBar_Stop();
         this.btnLocked = "N";

      }
    );
  }

  progressBar_Starting()
  {
    this.progressBar.dynamicValue=true;
  }

  progressBar_Stop()
  {
    this.progressBar.dynamicValue=false;
  }
}
