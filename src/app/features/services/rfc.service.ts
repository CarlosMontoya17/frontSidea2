import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const _api = "https://actasalinstante.com:3030";

@Injectable({
  providedIn: 'root'
})
export class RfcService {

  constructor(private http: HttpClient) { }


  getDates(): Observable<any> {
    return this.http.get(`${_api}/api/rfc/requests/myDates/`);
  }

  obtenerPeticiones(fecha: any): Observable<any> {
    return this.http.get(`${_api}/api/rfc/requests/myRequests/${fecha}`);
  }


  downloadRfc(id: any): Observable<any>{
    return this.http.get(`${_api}/api/rfc/request/donwload/${id}`, { responseType: 'blob'});
  }

  newRequest(clasification: any, data: any, search: any): Observable<any> {
    return this.http.post(`${_api}/api/rfc/requests/news/`, {clasification, data, search});
  }

  reAssign(id: any, new_user_id:any): Observable<any> {
    return this.http.put(`${_api}/api/actas/reg/transpose/${id}`, { newciber: new_user_id, service: 'rfc' });
  } 



}
