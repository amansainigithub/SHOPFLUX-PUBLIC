import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/pb_services/product_service/product.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getFinalCategoryList();
  }
  finalCategoryData:any;
  getFinalCategoryList()
  {
      this.productService.getFinalCategoryList().subscribe(
        data=>{
            this.finalCategoryData=data;
        },error=>{
            console.log(error);
        }
      )
  }

  getfinalCategoryList()
  {
    return this.finalCategoryData;
  }
}
