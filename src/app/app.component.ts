import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthURLService } from './helper-msg/auth-url.service';
import { ProductDetailsComponent } from './pages/productDetailsF/product-details/product-details.component';
import { ProductService } from './pb_services/product_service/product.service';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  

  constructor(public  tokenStorageService: TokenStorageService,
              private _router:Router,
              private http: HttpClient,
              private _AUTH_URL_SERVICE:AuthURLService,
              ) {
   }

   userName:any;
   

  ngOnInit(): void {

    if(this.tokenStorageService.getToken == null)
    {
      this._router.navigateByUrl("/login");
    }

   this. getCartLength();

   this.getUserName();




    // this.isLoggedIn = !!this.tokenStorageService.getToken();
    // if (this.isLoggedIn) {
    //   const user = this.tokenStorageService.getUser();
    //   this.roles = user.roles;
    //   this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
    //   this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
    //   this.username = user.username;
    
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this._router.navigateByUrl("/login")
    
  }

 
badgeContent:any;


   getCartLength()
   {
    let cartListNew = JSON.parse(localStorage.getItem("cart")  || '{}' );
     this.badgeContent = cartListNew.length;
   }
 
 

   getUserName()
   {
    this.userName =  this.tokenStorageService.getUserName();
   }


 


}
