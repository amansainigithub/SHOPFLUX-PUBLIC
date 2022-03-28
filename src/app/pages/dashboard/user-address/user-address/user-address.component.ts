import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UpdateAddressService } from 'src/app/pb_services/update_address_service/update-address.service';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';


@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {

  constructor(private _tks:TokenStorageService,
    private _ua_Service:UpdateAddressService,
    private _snackbar_helper:SnackbarHelperService) { }

  updateAddressObject:any;


  ngOnInit(): void {
    this.getUserAddress();
  }

  getUserAddress()
  { 
      this._ua_Service.getCurrentUserAddress(this._tks.getUser().username).subscribe(data=>{
       this.updateAddressObject = data;
       console.log(this.updateAddressObject);
       console.log(data);
       
       
      },error=>{
        console.log(error);
        
      })
  }

  updateAddress()
  {
      this._ua_Service.updateAddressService(this.updateAddressObject).subscribe((data:any)=>{
        this._snackbar_helper.
        OpenSnackbar_verticalPosition_top_right("Address Updated", "",2000);
          
      },error=>{
         this._snackbar_helper.
          OpenSnackbar_verticalPosition_top_right("update Address Failed", "",2000);
      });
  }

}
