import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CartService } from 'src/app/pb_services/cart_service/cart.service';
import { WindowRefService } from 'src/app/pb_services/winref/window-ref.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
  providers:[WindowRefService]
})



export class CartPageComponent implements OnInit {

  constructor(private appCom:AppComponent ,
              private _tks:TokenStorageService,
              private router: Router,
              private cartService:CartService,
              private windowref:WindowRefService,
              private routes:Router

             ) { }
  cartList:any=[];
  addressChecker:any;


  ngOnInit(): void {
    //get cart list
    this.getCartList();
    this.addressAssignToGlobal();

    console.log(this.cartList);
  }

  getCartList()
  {
    this.cartList = JSON.parse(localStorage.getItem("cart")  || '{}' );
    this.getCartPriceSummary();
  }


    //**REMOVE ITEM FROM CART**
removeItemFromCart(pdId:any)
{
    let cart = JSON.parse(localStorage.getItem('cart') || '{}' );

    let newCart = cart.filter((item:any)=> item.productId != pdId)

    localStorage.setItem("cart",JSON.stringify(newCart));

    //call cart length
    this.getCartList();

    //call to cart
    this.appCom.getCartLength();

    //calling price summary
    this.getCartPriceSummary();
}

totalMrp:any=0; 
getCartPriceSummary()
{  
  this.totalMrp= 0;
    let cart = JSON.parse(localStorage.getItem('cart') || '{}' );

    for(var item in cart){
      var singleNode = cart[item];
      console.log(singleNode);
      
    this.totalMrp = this.totalMrp + parseInt( singleNode.productPrice)  * singleNode.productQuantity ;
  //  console.log(this.totalMrp);
    
  }
  //  console.log(this.totalMrp);
}

//******************************************************************************************** */



//CHECk-OUT 
checkOut()
{ 
    console.log("checkout");

    if(!this._tks.isLoggedIn())
    {
        this.router.navigateByUrl("/register")
    }
    else{
          //console.log("USER IS LOGGED-IN
        //IF ADDRESS NOT FOUND HERE  OR MOB
        if(this.addressChecker)
        {
          //redirect to registeration address form
          this.router.navigateByUrl("/dashboard/userAddress")
        }
        else{

        //CARTS
        let carts = this.cartService;

        //ROUTER
        let router = this.router;

        let cart = JSON.parse(localStorage.getItem('cart') || '{}' );

          this.cartService.parselCartList(cart).subscribe(
           (data:any)=>{
            if(data.status=="created"){
                // console.log("AMOUNT CREATED");
                // console.log("RUNNING PROCEDD...");
                // console.log(data.receipt);
                // console.log(data.amount);
                
               var updateRazorPayObj:any={
                  "razorpayPaymentId":"",
                  "razorpayOrderId":"",
                  "razorpaySignatureId":""
                }
                
              var options = {
                "key": "rzp_test_YdBfMCwPkwhqi3", // Enter the Key ID generated from the Dashboard
                "amount": data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": data.currency,
                "name": "TEST-MODE",
                "description": "DESCRIPTION TESTING",
                "image": "https://images.unsplash.com/photo-1621131179929-426cfb7ce409?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
                "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                
                //Success Handler
                "handler": function (data:any){
                     console.log("PAYMENT SUCCESS");
                    // console.log(data);
                    // console.log(data.razorpay_payment_id);
                    // console.log(data.razorpay_order_id);
                    // console.log(data.razorpay_signature)

                    //UPDATE RAZOR-PAY
                    updateRazorPayObj.razorpayPaymentId =    data.razorpay_payment_id;
                    updateRazorPayObj.razorpayOrderId =      data.razorpay_order_id;
                    updateRazorPayObj.razorpaySignatureId =   data.razorpay_signature;
                    
                    //update razorpay data
                    carts.updateRazorPayService(updateRazorPayObj).subscribe(
                      updataRes=>{
                          console.log(updataRes);
                          
                      },errorRes=>{
                        console.log(errorRes);
                        
                      }
                    )

                    //UPDATE CART CATCHER
                      carts.updateParselCartStatus(cart).subscribe(data=>{
                          console.log(data);
                          
                      },error=>{
                        console.log(error);
                        
                      })

                    //NAVIGATE TO SUCCESS PAGE
                   window.location.href="/payment-success";

                },
                "prefill": {
                    "name": "",
                    "email": "",
                    "contact": ""
                },
                "notes": {
                    "address": "Angular Razorpay Testing"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
      
            var rzp1 = new this.windowref.nativeWindow.Razorpay(options);
      
             //Failure Handler
              rzp1.on('payment.failed', function (data:any){
              alert(data.error.code);
              // alert(response.error.description);
              // alert(response.error.source);
              // alert(response.error.step);
              // alert(response.error.reason);
              // alert(response.error.metadata.order_id);
              // alert(response.error.metadata.payment_id);
                });
      
            rzp1.open();
        
            }
            },error=>
            {
                console.log(error);
                
            }
          )
    }
  }
}




public  addressAssignToGlobal():any
{
  this.cartService.getUserAddress( this._tks.getUserName()).subscribe((data:any)=>{
   if(data.message == null)
   {
     this.addressChecker = true;
   }
   else{
    this.addressChecker = false;
   }
    
  },error=>{
     console.log(error);
  }) 
  
}


}