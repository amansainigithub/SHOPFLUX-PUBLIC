import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';
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
              private appCom:AppComponent,
              private router:Router,
              private _snackbar_helper:SnackbarHelperService,
             ) { }

  productId:any;
  productName:any;
  node:any;
  productFiles:any;
  finalCategory:any;
  moreProduct:any;

  // PROGRESS BAR
  progressBar:any ={
    dynamicValue:false
  }


  //THUMBNAIL var
  thumbnailUrl:any;

  private lastPoppedUrl:any;
  private yScrollStack: number[] = [];


  ngOnInit(): void {

    this.router.events.subscribe((event) => {
      // if (!(event instanceof NavigationEnd)) {
      //     return;
      // }
      window.scrollTo(0, 0)
  });

    this.productName = this._activateRoute.snapshot.params.productName;
     this.productId = this._activateRoute.snapshot.params.productId;
    // console.log(this.productName);
    // console.log(this.productId);

    //calling PRODUCT BY ID
    this.getProductDetailsById();

    

  }


  getProductDetailsById()
  {
      this.productService.getproductByProductId(this.productId).subscribe(
        (data:any) =>{
          //PRODUCT DATA
         this.node=data;
         this.finalCategory = data.finalCategoryId;
        //  console.log(this.node);
         console.log(data.finalCategoryId);
         
            
         //PRODUCT FILE URLS
         this.productFiles = this.node.productFileUrls;

        //PUT THUMBNAIL IMAGE TO GLOBAL
        this.thumbnailUrl = this.node.thumbnailUrl;

         //CALLING LIST BY FINAL-CATEGORY-ID
         this.getMoreProductByFinalCategoryId(data.finalCategoryId);
         
        },
        error=>{
            console.log(error);
            
        }

      )
  }

  getProductDetailsByIdClicking(productId:any)
  { 

    //StART Progrss Bar
    this.progressBar_Starting();

      this.productService.getproductByProductId(productId).subscribe(
        (data:any) =>{
          //PRODUCT DATA
         this.node=data;
         this.finalCategory = data.finalCategoryId;
        //  console.log(this.node);
        // console.log(data.finalCategoryId);
         
            
         //PRODUCT FILE URLS
         this.productFiles = this.node.productFileUrls;

        //PUT THUMBNAIL IMAGE TO GLOBAL
        this.thumbnailUrl = this.node.thumbnailUrl;

        //STOP PROGRESS BAR
        this.progressBar_Stop();

        },
        error=>{
            console.log(error);

        //STOP PROGRESS BAR
        this.progressBar_Stop();
            
        }

      )
  }

//   scroll(el: HTMLElement) {
//     el.scrollIntoView({behavior: 'smooth'});
// }

  getMoreProductByFinalCategoryId(finalCategoryId:any)
  {
      this.productService.getMoreProductByFinalCategoryId_Service(finalCategoryId)
      .subscribe(data=>{
           this.moreProduct = data;
           console.log(data);
           
      },error=>{
            console.log(error);
            
      })
  }

  //CHANGE FILE URL {thumbnailurl --> fileUrl with reverse}
  changFileUrl(fileUrl:any)
  {
   this.thumbnailUrl = fileUrl;
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
