import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatSnackBarModule,
  MatCardModule,
  MatGridListModule,
  MatTableModule
} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { TablesComponent } from './tables/tables.component';
import { ItemsComponent } from './items/items.component';
import { ModalTableComponent } from './tables/modal/modal-table/modal-table.component';

import { MainComponent } from './main/main.component';
import { TablesService } from './tables/service/tables.service';
import { BaseUtil } from './shared/base-util';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { ItemsService } from './items/service/items.service';
import { ModalItemComponent } from './items/modal/modal-item/modal-item.component';
import { OrdersService } from './orders/service/orders.service';
import { ModalOrderComponent } from './orders/modal/modal-order/modal-order.component';
import { ModalCreateOrderComponent } from './orders/modal/modal-create-order/modal-create-order.component';




@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    TablesComponent,
    ItemsComponent,
    MainComponent,
    ModalTableComponent,
    SnackbarComponent,
    ModalItemComponent,
    ModalOrderComponent,
    ModalCreateOrderComponent
  ],
  entryComponents: [
    ModalTableComponent,
    ModalItemComponent,
    ModalOrderComponent,
    ModalCreateOrderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule
  ],
  providers: [TablesService, BaseUtil, ItemsService, OrdersService],

  bootstrap: [AppComponent]
})
export class AppModule { }
