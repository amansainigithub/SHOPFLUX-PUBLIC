import { Component, OnInit } from '@angular/core';
import { ProductService } from '../pb_services/product_service/product.service';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  progressBar:any ={
    dynamicValue:false
  }

  productData:any;

  constructor(private userService: UserService,private productService:ProductService) { }

  ngOnInit(): void {

    //FETCHING PRODUCT
    this.getProductList();

    // this.userService.getPublicContent().subscribe(
    //   data => {
    //   },
    //   err => {
    //     this.content = JSON.parse(err.error).message;
    //   }
    // );
  }

  getProductList()
  {
    this.progressBar_Starting();
      this.productService.getProductList().subscribe(
        data=>{
            this.productData=data;
            console.log(data);
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
