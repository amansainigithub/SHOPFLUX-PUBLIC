import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  progressBar:any ={
    dynamicValue:false
  }

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, 
    public tokenStorage: TokenStorageService,
    private _router:Router,
    private appComm:AppComponent) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
     this._router.navigateByUrl("/dashboard") 
    }
  }

  onSubmit(): void {
    //Progress Bar Starting
  this.progressBar_Starting();
  
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe(
      data => {
        
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this._router.navigateByUrl("/");

        //call username
        this.appComm.getUserName();

        //Stop Progrss Bar
        this.progressBar_Stop();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;

        //Stop Progress Bar
        this.progressBar_Stop();
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
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
