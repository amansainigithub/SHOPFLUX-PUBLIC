import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ProductService } from 'src/app/pb_services/product_service/product.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private userService: UserService,
              private productService:ProductService,
              private _activateRoute:ActivatedRoute,
              private appCom:AppComponent) { }

  productId:any;
  productName:any;
  node:any;
  productFiles:any;

  ngOnInit(): void {
    this.productName = this._activateRoute.snapshot.params.productName;
     this.productId = this._activateRoute.snapshot.params.productId;
    // console.log(this.productName);
    // console.log(this.productId);

    //calling PRODUCT BY ID
    this.getProductDetailsById();

    //
     this. testing()
  }


  getProductDetailsById()
  {
      this.productService.getproductByProductId(this.productId).subscribe(
        data =>{
          //PRODUCT DATA
         this.node=data;
        // console.log(this.node);
            
         //PRODUCT FILE URLS
         this.productFiles = this.node.productFileUrls;
         
        },
        error=>{
            console.log(error);
            
        }

      )
  }


  //****************** */

  cartList:any = [];
  cartListNew:any = [];
   cartObject:any={
    "productId":"",
    "productName":"",
    "productQuantity":1
  }



  addToCart(productId:any,productName:any)
  {
      console.log(productId);
      console.log(productName);

      this.cartObject.productId = productId;
      this.cartObject.productName = productName

      console.log("***********************");
      //console.log(this.cartList);
      let cart =  localStorage.getItem("cart");
      if( cart == null )
      {
        this.cartList.push(this.cartObject)
        localStorage.setItem("cart",JSON.stringify(this.cartList));
        console.log("PRODUCT IS ADDED FIRST TIME");
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
              console.log("PRODUCT QUANTITY IS INCREASED...");
              
         }
         else{
          //CREATE AND ADD NEW PRODUCT
          this.cartObject.productId = productId;
          this.cartObject.productName = productName;
            pCart.push(this.cartObject);
            localStorage.setItem("cart",JSON.stringify(pCart));
            this.appCom.getCartLength(); 
            console.log("PRODUCT ADDED......");

         }
          
      }
      
  }

  testing()
  {
   let cartitems =   localStorage.getItem("cart");
    console.log( JSON.stringify(cartitems));
    this.cartListNew = JSON.parse(localStorage.getItem("cart")  || '{}' );
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&");
    console.log(this.cartListNew);
  
    
  }



}
