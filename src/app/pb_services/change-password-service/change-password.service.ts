import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthURLService } from 'src/app/helper-msg/auth-url.service';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private http: HttpClient,private _AUTH_URL_SERVICE:AuthURLService) { }

  changePasswordCurrentUser(changePasswordForm:any)
  {
      return this.http.post(this._AUTH_URL_SERVICE.authUrl+"changePasswordCurrentUser",changePasswordForm);
  }
}
