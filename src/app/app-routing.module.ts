import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { OfferComponent } from './offer/offer.component';
import { AccountComponent } from './account/account.component';
import { PlComponent } from './pl/pl.component';
import { ProComponent } from './pro/pro.component';

const routes: Routes = [

  {path:"home",component:HomeComponent},
  {path:"services",component:ServicesComponent},
  {path:'offer',component:OfferComponent},
  {path:'account',component:AccountComponent},
  {path:'pro',component:ProComponent},
  {path:"contact",component:ContactComponent},
  {path:'pl',component:PlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
