import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Appointment } from '../model/appointment';
import { BaseUtil } from '../../shared/base-util';

@Injectable()
export class AppointmentService {

  constructor(private _http: HttpClient, private _base: BaseUtil) { }

  getAppointments(): Observable<Appointment[]> {
    return this._http.get<Appointment[]>(this._base.baseUrl + 'tables');
  }
}
