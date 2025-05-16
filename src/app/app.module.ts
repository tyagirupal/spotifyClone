import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenderComponent } from './render/render.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { PremiumComponent } from './premium/premium.component';
import { SupportComponent } from './support/support.component';
import { DownloadComponent } from './download/download.component';
import { SignupComponent } from './signup/signup.component';
import { InstallComponent } from './install/install.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatExpansionModule} from '@angular/material/expansion';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    RenderComponent,
    LoginComponent,
    PremiumComponent,
    SupportComponent,
    DownloadComponent,
    SignupComponent,
    InstallComponent,
    HomeComponent
  ],
  imports: [
    MatExpansionModule,
    HttpClientModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
