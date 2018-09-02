import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUtil } from '../../shared/base-util';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { Table } from '../../tables/model/table';

@Injectable()
export class OrdersService {

  constructor(private _http: HttpClient,
    private _base: BaseUtil) { }


  getOrdersByTable(table: Table):Observable<Order>{
    return this._http.get<Order>(this._base.baseUrl+'orderTable?tableId='+table.id);
  }


  getOrders(): Observable<Order[]> {
    return this._http.get<Order[]>(this._base.baseUrl + 'orders');
  }

  addOrder(order: Order): Observable<any> {
    return this._http.post(this._base.baseUrl + 'orders', order, { responseType: 'text' });
  }

  updateOrder(order: Order): Observable<string> {
    return this._http.put(this._base.baseUrl + 'orders', order, { responseType: 'text' });
  }

  removeOrder(order: Order): Observable<any> {
    return this._http.delete(this._base.baseUrl + 'orders/' + order.id)
  }
}
