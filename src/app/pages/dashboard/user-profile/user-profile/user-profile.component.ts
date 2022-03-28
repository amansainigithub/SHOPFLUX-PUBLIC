import { Component, OnInit } from '@angular/core';
import { SnackbarHelperService } from 'src/app/helper-msg/snackbar-helper.service';
import { UpdateAddressService } from 'src/app/pb_services/update_address_service/update-address.service';
import { UserProfileService } from 'src/app/pb_services/user-profile/user-profile.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private _tks:TokenStorageService,
    private _up_Service:UserProfileService,
    private _snackbar_helper:SnackbarHelperService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  userData:any;

  getCurrentUser()
  {
    this._up_Service.getCurrentUser(this._tks.getUser().username).subscribe(data=>{
     this.userData=data;
    },error=>{
      console.log(error);
    })
  }


  updateUserProfile()
  {
    this._up_Service.updateCurrentUserProfile(this.userData).subscribe(
      data=>{
        console.log(data);
        
        this._snackbar_helper.
        OpenSnackbar_verticalPosition_top_right("Profile Updated", "",2000);
        
      },error=>{
        this._snackbar_helper.
        OpenSnackbar_verticalPosition_top_right("Failed To Update", "",2000);
        
      }
    )
    
  }

}
