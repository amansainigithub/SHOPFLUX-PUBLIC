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
  { path: 'testing', component: TestingComponent },
 

  { path: 'dashboard',canActivate:[AuthLoginGuard], 
  children: [
              { path: '', component: DashboardComponent},
            ]
  },
  // { path: '',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
