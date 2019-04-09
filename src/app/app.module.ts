import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { OfferComponent } from './offer/offer.component';
import { AccountComponent } from './account/account.component';
import { ProComponent } from './pro/pro.component';
import { PlComponent } from './pl/pl.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    OfferComponent,
    AccountComponent,
    ProComponent,
    PlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //import HttpClientModule
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
