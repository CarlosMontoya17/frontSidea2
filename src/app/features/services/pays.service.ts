import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const _api = 'https://actasalinstante.com:3030';
@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(private http: HttpClient) { }

  getDates(): Observable<any> {
    return this.http.get(`${_api}/api/actas/reg/Corte/Dates/`);
  }

  getMyDates(): Observable<any> {
    return this.http.get(`${_api}/api/actas/reg/corte/MyDates/`);
  }

  getClientsOnDate(date: string): Observable<any> {
     return this.http.get(`${_api}/api/actas/reg/Corte/Clients/${date}`);
  }

  getCorte(id: any, date: any): Observable<any> {
    return this.http.get(`${_api}/api/actas/reg/Corte/${id}/${date}`);
  }

  getMyCorte(date: any): Observable<any> {
    return this.http.get(`${_api}/api/actas/reg/myCorte/${date}`);
  }
  
}
