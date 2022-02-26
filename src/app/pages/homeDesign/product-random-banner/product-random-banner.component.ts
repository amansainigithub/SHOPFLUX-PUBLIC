import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/pb_services/product_service/product.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-product-random-banner',
  templateUrl: './product-random-banner.component.html',
  styleUrls: ['./product-random-banner.component.css']
})
export class ProductRandomBannerComponent implements OnInit {

  

  constructor(private userService: UserService,private productService:ProductService) { }


  progressBar:any ={
    dynamicValue:false
  }

  productfinalCategoryData:any;

  ngOnInit(): void {

      //GET PRODUCT FINAL CATEGORY LIST
      this.getProductListByFinalCategory();

  }

  public customOptionsProduct: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    //autoplayTimeout:3000,
    navSpeed: 300,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
  //nav: true
  }

  
  getProductListByFinalCategory()
  {
    this.progressBar_Starting();
      this.productService.getProductListByFinalCategory().subscribe(
        data=>{
           // console.log("TEST*************************************");
            this.productfinalCategoryData=data;
           // console.log(this.productfinalCategoryData);
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
