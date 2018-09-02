import { Component, OnInit } from '@angular/core';
import { OrdersService } from './service/orders.service';
import { Order } from './model/order';
import { Table } from '../tables/model/table';
import { TablesService } from '../tables/service/tables.service';
import { MatDialog } from '@angular/material';
import { ModalOrderComponent } from './modal/modal-order/modal-order.component';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  ordersList: Order[];
  order: Order;
  orderTables: Table[];

  constructor(private _service: OrdersService, 
    private _tbService: TablesService,
    public dialog: MatDialog,) { }

  ngOnInit() {
    this.getTables();

    this.getOrders();
  }

  openDialog(order: Order): void {
    if (!order) {
      order = new Order();
    }
    const dialogRef = this.dialog.open(ModalOrderComponent, {
      data: {
        // "date": order.date || "",
        // "discount": order.discount || "",
        // "price": order.totalPrice,
        // "TableId": order.table.id,
        // "OrderItems": order.itemsList
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.id)
        this.editOrders(result);
      else
        this.addOrders(result);
    })
  }


  openOrderTable(table: Table): void {
    this._service.getOrdersByTable(table).subscribe(res => {
      this.openDialog(res);      
    });
  }

  getTables(): void {
    this._tbService.getTables().subscribe(res => this.orderTables = res);
  }


  getTablesAvailable(): void {
    this._tbService.getTables().subscribe(res => this.orderTables = res.filter((tb) => { return tb.status == false }));
  }

  getOrders(): void {
    this._service.getOrders().subscribe(res => { this.ordersList = res });
  }

  addOrders(order: Order): void {
    this._service.addOrder(order).subscribe(res => { this.getOrders() })
  }

  editOrders(order: Order): void {
    this._service.updateOrder(order).subscribe(res => { this.getOrders() });
  }


}
