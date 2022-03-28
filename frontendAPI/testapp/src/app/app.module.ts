import { AppComponent, submitData } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AvailableShipmentsComponent } from './available-shipments/available-shipments.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListMethodsComponent } from './list-methods/list-methods.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ShipmentComponent } from './shipment/shipment.component';
import { AgentsComponent } from './agents/agents.component';

@NgModule({
  declarations: [
    AppComponent,
    AvailableShipmentsComponent,
    ShipmentComponent,
    ListMethodsComponent,
    AgentsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [submitData],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
