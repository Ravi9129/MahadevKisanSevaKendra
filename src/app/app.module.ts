import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './account/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './authentication/components/forgot-password/forgot-password.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { ResetPasswordComponent } from './authentication/components/reset-password/reset-password.component';
import { SignUpComponent } from './authentication/components/sign-up/sign-up.component';
import { VerifyOtpResetPasswordComponent } from './authentication/components/verify-otp-reset-password/verify-otp-reset-password.component';
import { VerifyOtpComponent } from './authentication/components/verify-otp/verify-otp.component';
import { ViewLandingComponent } from './authentication/components/view-landing/view-landing.component';
import { HeaderComponent } from './shared/Components/header/header.component';
import { NavbarComponent } from './shared/Components/navbar/navbar.component';
import { SidebarComponent } from './shared/Components/sidebar/sidebar.component';
import { AddCustomerComponent } from './Customers/add-customer/add-customer.component';
import { ViewCustomerComponent } from './Customers/view-customer/view-customer.component';
import { CustomerDashboardComponent } from './Customers/customer-dashboard/customer-dashboard.component';
import { CustomerloginComponent } from './Customers/customerlogin/customerlogin.component';
import { CustomersignupComponent } from './Customers/customersignup/customersignup.component';
import { AddCartComponent } from './Payment/components/add-cart/add-cart.component';
import { CheckoutComponent } from './Payment/components/checkout/checkout.component';
import { OrderhistoryComponent } from './Payment/components/orderhistory/orderhistory.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    VerifyOtpComponent,
    ViewLandingComponent,
    VerifyOtpResetPasswordComponent,
    SidebarComponent,
    HeaderComponent,
    NavbarComponent,
    DashboardComponent,
    AddCustomerComponent,
    ViewCustomerComponent,
    CustomerDashboardComponent,
    CustomerloginComponent,
    CustomersignupComponent,
    AddCartComponent,
    CheckoutComponent,
    OrderhistoryComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
