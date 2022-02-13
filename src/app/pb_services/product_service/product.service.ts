import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthURLService } from 'src/app/helper-msg/auth-url.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,private _AUTH_URL_SERVICE:AuthURLService) { }

  //GET PRODUCT LIST
  getProductList()
  {
 return this.http.get(this._AUTH_URL_SERVICE.authUrl+"getProductList_public")
  }


}
