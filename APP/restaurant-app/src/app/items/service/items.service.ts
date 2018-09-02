import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUtil } from '../../shared/base-util';
import { Items } from '../model/items';
import { Observable } from 'rxjs';

@Injectable()
export class ItemsService {

  constructor(private _http: HttpClient, private _base: BaseUtil) { }

  getItems(): Observable<Items[]> {
    return this._http.get<Items[]>(this._base.baseUrl + 'items');
  }

  addItem(item: Items): Observable<any> {
    return this._http.post(this._base.baseUrl + 'items', item, {responseType: 'text'});
  }

  updateItem(item: Items): Observable<any> {
    return this._http.put(this._base.baseUrl + 'items', item, {responseType: 'text'});
  }

  removeItem(item: Items): Observable<any> {
    return this._http.delete(this._base.baseUrl + 'items/' + item.id, {responseType: 'text'});
  }
}
