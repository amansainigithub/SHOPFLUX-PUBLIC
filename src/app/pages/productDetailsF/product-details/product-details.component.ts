import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/pb_services/product_service/product.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private userService: UserService,private productService:ProductService,private _activateRoute:ActivatedRoute) { }

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
  }


  getProductDetailsById()
  {
      this.productService.getproductByProductId(this.productId).subscribe(
        data =>{
          //PRODUCT DATA
         this.node=data;
         console.log(this.node);
            
         //PRODUCT FILE URLS
         this.productFiles = this.node.productFileUrls;
         
        },
        error=>{
            console.log(error);
            
        }

      )
  }




}
