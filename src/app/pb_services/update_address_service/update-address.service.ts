import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthURLService } from 'src/app/helper-msg/auth-url.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateAddressService {

  constructor(private http: HttpClient,private _AUTH_URL_SERVICE:AuthURLService) { }

  updateAddressService(updateAddressObj:any)
  {
      return this.http.post(this._AUTH_URL_SERVICE.authUrl+"updateUserAddress_public",updateAddressObj);
  }


  getCurrentUserAddress(username:any)
  {
    return this.http.get(this._AUTH_URL_SERVICE.authUrl+"getCurrentUserAddress/"+username);
    
  }


}
