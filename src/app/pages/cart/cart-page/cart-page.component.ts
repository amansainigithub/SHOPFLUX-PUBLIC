import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor() { }
  cartList:any=[];

  ngOnInit(): void {
    //get cart list
    this.getCartList();

    console.log(this.cartList);
  }

  getCartList()
  {
    this.cartList = JSON.parse(localStorage.getItem("cart")  || '{}' );
  }

}
