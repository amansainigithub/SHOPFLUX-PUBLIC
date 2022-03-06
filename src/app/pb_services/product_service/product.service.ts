import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthURLService } from 'src/app/helper-msg/auth-url.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,private _AUTH_URL_SERVICE:AuthURLService) { }

  //GET PRODUCT LIST
  getProductList()
  { 
        return this.http.get(this._AUTH_URL_SERVICE.authUrl+"getProductList_public")
  }

  //GET PRODUCT LIST
  getTopBanner()
  {
        return this.http.get(this._AUTH_URL_SERVICE.authUrl+"getTopBannerList_public")
  }


  getFinalCategoryList()
  {
        return this.http.get(this._AUTH_URL_SERVICE.authUrl+"getFinalCategoryList_public")
  }

  getProductListByFinalCategory()
  {
        return this.http.get(this._AUTH_URL_SERVICE.authUrl+"getProductByFinalCategory_public/")
  }

  getProductListByFinalCategoryName(finalCategoryName:any)
  {
      return this.http.get(this._AUTH_URL_SERVICE.authUrl+"getProductListByFinalCategoryName_public/"+finalCategoryName)
  }

  getproductByProductId(productId:any)
  {
      return this.http.get(this._AUTH_URL_SERVICE.authUrl+"getProductByProductId/"+productId)
  }

  getMoreProductByFinalCategoryId_Service(fc_id:any)
  {
        console.log(fc_id);
        
      return this.http.get(this._AUTH_URL_SERVICE.authUrl+"getProductByFinalCategoryId/"+fc_id)
  }




}
