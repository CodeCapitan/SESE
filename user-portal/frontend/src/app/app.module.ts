import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CustomerComponent} from './customer/customer.component';
import {AppRoutingModule} from './app.routing.module';
import {CustomerService} from './customer/customer.service';
import {HttpClientModule} from "@angular/common/http";
import {AddCustomerComponent} from './customer/add-customer.component';
import {UiModule} from './ui/ui.module';
import {ContactComponent} from './contact/contact.component';
import {HotelManagementModule} from './hotel-management/hotel-management.module';
import {HomeComponent} from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReservationService} from "./services/reservation.service";

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AddCustomerComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    UiModule,
    HotelManagementModule,
    NgbModule.forRoot()
  ],
  providers: [CustomerService, ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
