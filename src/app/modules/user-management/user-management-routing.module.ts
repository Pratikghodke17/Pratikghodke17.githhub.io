import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'createaccount',
    component: CreateAccountComponent
  },
  {
    path: 'adminhome',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () => import('../content-management/content-management.module').then(f => f.ContentManagementModule)
  },
  {
    path: 'userhome',
    canActivate: [AuthGuard],
    loadChildren: () => import('../customer/customer.module').then(f => f.CustomerModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
