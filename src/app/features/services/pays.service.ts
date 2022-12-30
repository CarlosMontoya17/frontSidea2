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

   getPeticiones(date: string): Observable<any> {
     return this.http.get(`${_api}/api/actas/reg/Corte/Clients/${date}`);
   }

}
