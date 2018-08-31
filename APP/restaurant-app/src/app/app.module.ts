import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, 
         MatSidenavModule, 
         MatToolbarModule,
         MatListModule,
         MatDialogModule, 
         MatFormFieldModule,
         MatSelectModule,
         MatInputModule,
         MatSnackBarModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { TablesComponent } from './tables/tables.component';
import { ItemsComponent } from './items/items.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ModalTableComponent } from './tables/modal/modal-table/modal-table.component';

import { MainComponent } from './main/main.component';
import { TablesService } from './tables/service/tables.service';
import { BaseUtil } from './shared/base-util';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';




@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    TablesComponent,
    ItemsComponent,
    MainComponent,
    AppointmentComponent,
    ModalTableComponent,
    SnackbarComponent
  ],
  entryComponents: [
    ModalTableComponent,
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
    MatSnackBarModule
  ],
  providers: [TablesService, BaseUtil],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
