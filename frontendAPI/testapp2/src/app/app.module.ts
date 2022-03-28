import { AgentsComponent } from './agents/agents.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListMethodsComponent } from './list-methods/list-methods.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShipmentComponent } from './shipment/shipment.component';
import { ShippingMethodsComponent } from './shipping-methods/shipping-methods.component';

@NgModule({
  declarations: [
    AppComponent,
    ShippingMethodsComponent,
    ShipmentComponent,
    ListMethodsComponent,
    AgentsComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
