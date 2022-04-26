import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [ 
    SignInComponent,
    CreateAccountComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    FormsModule      ,
    HttpClientModule,

  ]
})
export class UserManagementModule { }
