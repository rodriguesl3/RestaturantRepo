import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables/tables.component';
import { OrdersComponent } from './orders/orders.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  { path: 'tables', component: TablesComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'items', component: ItemsComponent },
  { path: '**', redirectTo: '/tables', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
