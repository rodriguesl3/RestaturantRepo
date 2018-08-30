import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { TablesComponent } from './tables/tables.component';
import { ItemsComponent } from './items/items.component';

import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    TablesComponent,
    ItemsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
