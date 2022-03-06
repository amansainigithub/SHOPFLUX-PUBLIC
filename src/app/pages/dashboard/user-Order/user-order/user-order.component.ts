import { Component, OnInit } from '@angular/core';
import { UserOrderService } from 'src/app/pb_services/user-order-service/user-order.service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {

  constructor(private uos:UserOrderService) { }

  ngOnInit(): void {
    this.getUserOrder();
  }

  userOrder:any;

  //GET USER ORDER
  getUserOrder()
  {
      this.uos.getUserOrder().subscribe(data=>{
       this.userOrder = data;
       console.log(this.userOrder);
       
      },error=>{
        console.log(error);
        
      })
  }

}
