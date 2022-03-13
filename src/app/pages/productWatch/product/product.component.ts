import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/pb_services/product_service/product.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private userService: UserService,
    private productService:ProductService,
    private _activateRoute:ActivatedRoute
    ,private router:Router) { }

  finalCategoryName:any;
  productList:any;

  progressBar:any ={
    dynamicValue:false
  }

  ngOnInit(): void {

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
          console.log("***************TEST****************");
          this.productList=data;
          console.log(this.productList);
          this.progressBar_Stop();
      },error=>{
          console.log(error);
          this.progressBar_Stop();
      }
    )
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
