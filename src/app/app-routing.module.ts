import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCustomerComponent } from './Customers/add-customer/add-customer.component';
import { CustomerloginComponent } from './Customers/customerlogin/customerlogin.component';
import { CustomersignupComponent } from './Customers/customersignup/customersignup.component';
import { ViewCustomerComponent } from './Customers/view-customer/view-customer.component';
import { AddCartComponent } from './Payment/components/add-cart/add-cart.component';
import { CheckoutComponent } from './Payment/components/checkout/checkout.component';
import { OrderhistoryComponent } from './Payment/components/orderhistory/orderhistory.component';
import { DashboardComponent } from './account/components/dashboard/dashboard.component';
import { SearchDashboardComponent } from './account/components/search-dashboard/search-dashboard.component';
import { ForgotPasswordComponent } from './authentication/components/forgot-password/forgot-password.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { SignUpComponent } from './authentication/components/sign-up/sign-up.component';
import { HeaderComponent } from './shared/Components/header/header.component';
import { NavbarComponent } from './shared/Components/navbar/navbar.component';
import { SidebarComponent } from './shared/Components/sidebar/sidebar.component';

// const routes: Routes = [];

const routes: Routes = [ {path:'dashboard', component:DashboardComponent},
{path:'search',component:SearchDashboardComponent},
{path:'', component:LoginComponent},
{path:'signup',component:SignUpComponent},
{path:'forgotpassword', component:ForgotPasswordComponent},
{path:'header', component:HeaderComponent},
{path:'sidebar',component:SidebarComponent},
{path:'navbar',component:NavbarComponent},
{path:'addProductDetails', component:AddCustomerComponent},
{path:'viewcustomer', component:ViewCustomerComponent},
{path:'dashboard', component:DashboardComponent},
{path:'customerlogin', component:CustomerloginComponent},
{path:'customersignup', component:CustomersignupComponent},
{path:'addcart', component:AddCartComponent},
{path:'checkout', component:CheckoutComponent},
{path:'orderhistory', component:OrderhistoryComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
