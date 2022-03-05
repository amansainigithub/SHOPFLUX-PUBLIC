import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';
import { UpdateAddressService } from 'src/app/pb_services/update_address_service/update-address.service';

@Component({
  selector: 'app-user-address-form',
  templateUrl: './user-address-form.component.html',
  styleUrls: ['./user-address-form.component.css']
})
export class UserAddressFormComponent implements OnInit {

  constructor(private _ua_Service:UpdateAddressService,
              private _snackbar_helper:SnackbarHelperService,
              private router:Router) { }

  ngOnInit(): void {
  }

  progressBar:any ={
    dynamicValue:false
  }

  updateAddressObject:any={
    "addressLine1":"",
    "addressLine2":"",
    "city":"",
    "state":"",
    "zipCode":"",
    "country":"",
    "mobile":"",
  }


  updateAddress()
  {
    this.progressBar_Starting();
      this._ua_Service.updateAddressService(this.updateAddressObject).subscribe((data:any)=>{

        this._snackbar_helper.
        OpenSnackbar_verticalPosition_top_right("Address Updated", "",2000);
        
        //Stop Progrss Bar
        this.progressBar_Stop();

        this.router.navigateByUrl("/cart")

          
      },error=>{
         this._snackbar_helper.
          OpenSnackbar_verticalPosition_top_right("update Address Failed", "",2000);
         
          //Stop Progrss Bar
        this.progressBar_Stop();
      });
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
