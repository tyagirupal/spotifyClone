import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderComponent } from './render/render.component';
import { LoginComponent } from './login/login.component';
import { InstallComponent } from './install/install.component';
import { DownloadComponent } from './download/download.component';
import { PremiumComponent } from './premium/premium.component';
import { SignupComponent } from './signup/signup.component';
import { SupportComponent } from './support/support.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {
  //   path:' ',redirectTo:'/home', pathMatch:'full'
  // },
  { path:'',component:HomeComponent},
  {path:'render',component:RenderComponent},
  {path:'login',component:LoginComponent},
  {path:'install',component:InstallComponent},
  {path:'download',component:DownloadComponent},
  {path:'premium',component:PremiumComponent},
  {path:'signup',component:SignupComponent},
  {path:'support',component:SupportComponent},
  // {path:'home',component:HomeComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
