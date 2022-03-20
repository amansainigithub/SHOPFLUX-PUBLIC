import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NavbarDashboardComponent } from './components/navbar-dashboard/navbar-dashboard.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TestingComponent } from './pages/test/testing/testing.component';
import { TopBannerComponent } from './pages/homeDesign/top-banner/top-banner.component';
import { FinalCategoryBannerComponent } from './pages/homeDesign/final-category-banner/final-category-banner.component';
import { ProductRandomBannerComponent } from './pages/homeDesign/product-random-banner/product-random-banner.component';
import { ProductComponent } from './pages/productWatch/product/product.component';
import { ProductDetailsComponent } from './pages/productDetailsF/product-details/product-details.component';
import {MatBadgeModule} from '@angular/material/badge';
import { CartPageComponent } from './pages/cart/cart-page/cart-page.component';
import { UserAddressFormComponent } from './pages/addressForm/user-address-form/user-address-form.component';
import { PaymentSuccessComponent } from './pages/paymentSuccess/payment-success/payment-success.component';
import { UserOrderComponent } from './pages/dashboard/user-Order/user-order/user-order.component';
import { OrderSidebarComponent } from './pages/dashboard/user-Order/order-sidebar/order-sidebar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CategoryNavbarComponent } from './pages/homeDesign/category-navbar/category-navbar.component';
import { OtpVarifierComponent } from './otp-varifier/otp-varifier.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password/forget-password.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    NavbarDashboardComponent,
    DashboardComponent,
    TestingComponent,
    TopBannerComponent,
    FinalCategoryBannerComponent,
    ProductRandomBannerComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartPageComponent,
    UserAddressFormComponent,
    PaymentSuccessComponent,
    UserOrderComponent,
    OrderSidebarComponent,
    CategoryNavbarComponent,
    OtpVarifierComponent,
    ForgetPasswordComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    MatSlideToggleModule,
    CarouselModule,
    MatBadgeModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
