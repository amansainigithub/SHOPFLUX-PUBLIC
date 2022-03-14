import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';
import { ProductService } from 'src/app/pb_services/product_service/product.service';
import { UserService } from 'src/app/_services/user.service';
import { ProductDetailsComponent } from '../../productDetailsF/product-details/product-details.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private userService: UserService,
    private productService:ProductService,
    private _activateRoute:ActivatedRoute
    ,private router:Router,
    private appCom:AppComponent,
              private _snackbar_helper:SnackbarHelperService,
    ) { }

  finalCategoryName:any;
  productList:any;

  progressBar:any ={
    dynamicValue:false
  }

  ngOnInit(): void {

    this.router.events.subscribe((event) => {
      // if (!(event instanceof NavigationEnd)) {
      //     return;
      // }
      window.scrollTo(0, 0)
  });

    console.log("CURRENT URL");
    console.log(this.router.url);

    this.finalCategoryName = this._activateRoute.snapshot.params.finalCategoryName;
    console.log(this.finalCategoryName);

    this. getProductByFC_Id();
  }


  getProductByFC_Id()
  {
    this.progressBar_Starting();
    this.productService.getProductListByFinalCategoryName(this.finalCategoryName).subscribe(
      data=>{
          this.finalCategoryName=data;
       //   console.log("***************TEST****************");
          this.productList=data;
         // console.log(this.productList);
          this.progressBar_Stop();
      },error=>{
          console.log(error);
          this.progressBar_Stop();
      }
    )
  }

 //*********ADD TO CART********* */

 cartList:any = [];
 cartListNew:any = [];
  cartObject:any={
   "productId":"",
   "productName":"",
   "url":"",
   "productQuantity":1,
   "productPrice":""
 }


 addToCart(productId:any,productName:any,url:any,productPrice:any)
 {
     // console.log(productId);
     // console.log(productName);

     this.cartObject.productId = productId;
     this.cartObject.productName = productName;
     this.cartObject.url = url;
     this.cartObject.productPrice = productPrice;

     console.log("***********************");
     //console.log(this.cartList);
     let cart =  localStorage.getItem("cart");
     if( cart == null )
     {
       this.cartList.push(this.cartObject)
       localStorage.setItem("cart",JSON.stringify(this.cartList));
       
       //console.log("PRODUCT IS ADDED FIRST TIME");
       this._snackbar_helper.
         OpenSnackbar_verticalPosition_top_right("Product Addd To Cart", "",2000);

        this.appCom.getCartLength(); 
     }
     else{
         let pCart =  JSON.parse(cart);

         let  oldProduct =  pCart.find((item:any) => item.productId == productId);

        if(oldProduct)
        {
             //QUANTITY INCREASE ONLY
             oldProduct.productQuantity = oldProduct.productQuantity +1;
             pCart.map((item:any)=> {

               if(item.productId == oldProduct.productId)
               {
                 item.productQuantity =  oldProduct.productQuantity;
               }

             })
             localStorage.setItem("cart",JSON.stringify(pCart));
             //console.log("PRODUCT QUANTITY IS INCREASED...");
             this._snackbar_helper.
                OpenSnackbar_verticalPosition_top_right("Product Quantity Increase", "cancel",2000);
             
        }
        else{

         //CREATE AND ADD NEW PRODUCT
         this.cartObject.productId = productId;
         this.cartObject.productName = productName;
         this.cartObject.url = url;
         this.cartObject.productPrice = productPrice;

           pCart.push(this.cartObject);
           localStorage.setItem("cart",JSON.stringify(pCart));
           this.appCom.getCartLength(); 
           console.log("PRODUCT ADDED......");

           this._snackbar_helper.
           OpenSnackbar_verticalPosition_top_right("Product Addd To Cart", "",2000);
        }
         
     }
     
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
