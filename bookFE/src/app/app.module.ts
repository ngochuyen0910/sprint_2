import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListComponent } from './book/list/list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './book/detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './security/login/login.component';
import {ResetPasswordComponent} from './security/reset-password/reset-password.component';
import {VerityResetPasswordComponent} from './security/verity-reset-password/verity-reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
    DetailComponent,
    CartComponent,
    LoginComponent,
    ResetPasswordComponent,
    VerityResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
