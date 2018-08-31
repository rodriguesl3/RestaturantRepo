import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { BaseUtil } from '../../shared/base-util';
import { Table } from '../model/table';

@Injectable()
export class TablesService {

  constructor(private _http: HttpClient, private _base: BaseUtil) { }

  getTables(): Observable<Table[]> {
    return this._http.get<Table[]>(this._base.baseUrl + 'tables');
  }

  addTable(newTable: Table): Observable<Table> {
    return this._http.post<Table>(this._base.baseUrl + 'tables', newTable);
  }

  updateTable(adjustTable: Table): Observable<Table> {
    return this._http.put<Table>(this._base.baseUrl + 'tables?id=' + adjustTable.id, adjustTable);
  }

}
