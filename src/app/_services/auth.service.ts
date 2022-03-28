import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://64.227.8.158:3355/api/auth/public/cred/';
// const AUTH_API = 'http://localhost:3355/api/auth/public/cred/';

 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'publicSignIn', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'publicSignUp', {
      username,
      email,
      password
    }, httpOptions);
    
  }

  otpVerifyService(otpVerifyForm:any)
  {
      return this.http.post(AUTH_API+'otpVerify',otpVerifyForm);
  }

  //For forget password
   emailForgetPass(emailFP:any)
  {
      return this.http.post(AUTH_API+'emailValidator',emailFP);
  }


   //For forget password
   changePasswordByEmailAndOtp(changePasswordForm:any)
  {
      return this.http.post(AUTH_API+'changePasswordByEmailAndOtp',changePasswordForm);
  }

  
}
