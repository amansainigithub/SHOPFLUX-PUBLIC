import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthLoginGuard } from './authGuards/auth-login.guard';
import { ProductComponent } from './pages/productWatch/product/product.component';
import { TestingComponent } from './pages/test/testing/testing.component';
import { ProductDetailsComponent } from './pages/productDetailsF/product-details/product-details.component';
import { CartPageComponent } from './pages/cart/cart-page/cart-page.component';
import { UserAddressFormComponent } from './pages/addressForm/user-address-form/user-address-form.component';
import { PaymentSuccessComponent } from './pages/paymentSuccess/payment-success/payment-success.component';
import { UserOrderComponent } from './pages/dashboard/user-Order/user-order/user-order.component';
import { OtpVarifierComponent } from './otp-varifier/otp-varifier.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password/forget-password.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'p/:finalCategoryName', component: ProductComponent },
  { path: 'pd/:productName/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: 'verify-otp/:email', component: OtpVarifierComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },

  { path: 'dashboard',canActivate:[AuthLoginGuard], 
  children: [
              { path: '', component: DashboardComponent},
              { path: 'userAddress', component: UserAddressFormComponent },
              { path: 'userOrder', component: UserOrderComponent },
            ]
  },
  // { path: '',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
