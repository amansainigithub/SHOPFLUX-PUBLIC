import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthURLService } from 'src/app/helper-msg/auth-url.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserOrderService {

  constructor(private http: HttpClient,private _AUTH_URL_SERVICE:AuthURLService,private _tks:TokenStorageService) { }

  //GET PRODUCT LIST
  getUserOrder()
  { 
        return this.http.get
        (this._AUTH_URL_SERVICE.authUrl+"getPaidOrder_public/"+this._tks.getUserName())
  }
}
