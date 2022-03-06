import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthURLService } from 'src/app/helper-msg/auth-url.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient,private _AUTH_URL_SERVICE:AuthURLService) { }


  parselCartList(cartList:any)
  {
      return this.http.post(this._AUTH_URL_SERVICE.authUrl+"cartCatcher",cartList)
  }


  updateRazorPayService(updateRazorPay:any)
  {   console.log("update Rp Service running");
      return this.http.post(this._AUTH_URL_SERVICE.authUrl+"updateRazorPayOrder",updateRazorPay)
  }

  getUserAddress(userName:any){
      return this.http.get(this._AUTH_URL_SERVICE.authUrl+"getUserAddress_public/"+userName)
  }


  updateParselCartStatus(cartList:any,orderId:any,paymentId:any)
  {
      return this.http.post(this._AUTH_URL_SERVICE.authUrl+"updateCartCatcher/"+orderId+"/"+paymentId,cartList)
  }



}
