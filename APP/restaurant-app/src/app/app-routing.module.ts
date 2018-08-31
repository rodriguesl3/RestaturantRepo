import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TablesComponent } from './tables/tables.component';
import { OrdersComponent } from './orders/orders.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'items', component: ItemsComponent },
  // { path: '', redirectTo: 'app', pathMatch: 'full' },
  // { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
