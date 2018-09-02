import { Component, OnInit } from '@angular/core';
import { OrdersService } from './service/orders.service';
import { Order } from './model/order';
import { Table } from '../tables/model/table';
import { TablesService } from '../tables/service/tables.service';
import { MatDialog } from '@angular/material';
import { ModalOrderComponent } from './modal/modal-order/modal-order.component';
import { ModalCreateOrderComponent } from './modal/modal-create-order/modal-create-order.component';
import { Jsonp } from '@angular/http';
import { Items } from '../items/model/items';
import { OrderItem } from './model/orderItem';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  ordersList: Order[];
  order: Order;
  orderTables: Table[];
  tableSelected: Table;

  constructor(private _service: OrdersService,
    private _tbService: TablesService,
    public dialog: MatDialog, ) { }

  ngOnInit() {
    this.getTablesNotAvailable();
    this.getOrders();
  }

  createOrderDialog(table: Table): void {
    if (!table) {
      table = new Table();
    }
    this.tableSelected = table;

    const dialogRef = this.dialog.open(ModalCreateOrderComponent, {
      data: {
        "description": table.description || "",
        "id": table.id || "",
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      //TODO: set available table that has just closed order.
      console.log(JSON.stringify(result));
      if (!this.order){
        this.order = new Order();
        this.order.OrderItem = [];
      }
      
      let orderItem = new OrderItem();
      this.order.totalPrice = result.map(p => p.price).reduce((a, b) => a + b, 0).toFixed(2);
      result.map(p => p.id).forEach(element => {        
        orderItem.itemId = element;
        this.order.OrderItem.push(orderItem);  
      });
      this.order.date = new Date();
      this.order.discount = 0;
      this.order.tableId = this.tableSelected.id;
      this.addOrders(this.order);
    })
  }


  closeOrderDialog(order: Order): void {
    if (!order) {
      order = new Order();
    }

    const dialogRef = this.dialog.open(ModalOrderComponent, {
      data: {
        "table": order.table || "",
        "totalPrice": order.totalPrice || "",
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      //TODO: set available table that has just closed order.
      console.log(result);
    })
  }


  openCreateOrderTable(table: Table): void {
    this.createOrderDialog(table);
  }

  openOrderTable(table: Table): void {
    this._service.getOrdersByTable(table).subscribe(res => {
      this.closeOrderDialog(res);
    });
  }

  getTables(): void {
    this._tbService.getTables().subscribe(res => this.orderTables = res);
  }


  getTablesNotAvailable(): void {
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
