import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { addonPendients } from 'src/app/shared/models/pendients.model';


const _api = "https://actasalinstante.com:3030";

@Injectable({
  providedIn: 'root'
})
export class RfcService {

  Refreshing = new BehaviorSubject<any>(false);
  Refresh$ = this.Refreshing.asObservable();


  constructor(private http: HttpClient) { }

  setRefreshing(value: boolean): void {
    this.Refreshing.next(value);
  }

  getRefreshing(): Observable<boolean> {
    return this.Refresh$;
  }


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

  getPendients(): Observable<any> {
    return this.http.get(`${_api}/api/rfc/temp/getAll/`);
  }

  updatePendient(item: addonPendients): Observable<any> {
    return this.http.put(`${_api}/api/rfc/temp/change/status/${item.Id}`, { status: 0 });

  }

  deletePendient(id: any): Observable<any> {
    return this.http.delete(`${_api}/api/rfc/temp/delete/${id}`);
  } 

}
