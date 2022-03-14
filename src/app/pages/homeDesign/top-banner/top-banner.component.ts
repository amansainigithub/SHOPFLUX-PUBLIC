import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/pb_services/product_service/product.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css']
})
export class TopBannerComponent implements OnInit {

  constructor(private userService: UserService,private productService:ProductService) { }
  
  progressBar:any ={
    dynamicValue:false
  }

  topBannerData:any;

  ngOnInit(): void {
    //GET TOP BANNER
    this.getTopBanner();
  }

  public customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
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
        items: 1
      }
    },
  //nav: true
  }

  
  getTopBanner()
  {
    this.progressBar_Starting();
      this.productService.getTopBanner().subscribe(
        data=>{
            this.topBannerData=data;
          //  console.log(this.topBannerData);
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
