import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/pb_services/product_service/product.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-final-category-banner',
  templateUrl: './final-category-banner.component.html',
  styleUrls: ['./final-category-banner.component.css']
})
export class FinalCategoryBannerComponent implements OnInit {

  constructor(private userService: UserService,private productService:ProductService) { }

  finalCategoryData:any;

  ngOnInit(): void {
     //FINAL CATEGORY LISt
     this.getFinalCategoryList();
  }

  progressBar:any ={
    dynamicValue:false
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

  
  
  getFinalCategoryList()
  {
    this.progressBar_Starting();
      this.productService.getFinalCategoryList().subscribe(
        data=>{
            this.finalCategoryData=data;
            console.log("***************TEST****************");
            
            console.log(this.finalCategoryData);
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
