import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthURLService } from 'src/app/helper-msg/auth-url.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient,private _AUTH_URL_SERVICE:AuthURLService) { }

  getCurrentUser(userEmail:any)
  {
      return this.http.get(this._AUTH_URL_SERVICE.authUrl+"getCurrentUser/"+userEmail);
  }


  updateCurrentUserProfile(userData:any)
  {
      return this.http.post(this._AUTH_URL_SERVICE.authUrl+"updateCurrentUserProfile",userData);
  }


}
