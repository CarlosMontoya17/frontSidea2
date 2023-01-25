import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const _api = "https://actasalinstante.com:3030";
@Injectable({
  providedIn: 'root'
})
export class DocsService {

  constructor(private http: HttpClient) { }

  sendPDF(fileRaw: any, fileName: any): Observable<any> {
    const _body = new FormData();
    _body.append('doc', fileRaw, fileName);
    return this.http.post(`${_api}/api/actas/load`, _body);
  }

  newReg(read: any): Observable<any> {
    return this.http.post(`${_api}/api/actas/reg/new/`, read);
  }


  getDates(): Observable<any> {
    return this.http.get(`${_api}/api/actas/reg/corte/MyDates/`);
  }

  getRegs(date: any): Observable<any> {
    return this.http.get(`${_api}/api/actas/reg/getMyHistory/${date}`);
  }

  reAssign(id:any, newciber: number): Observable<any> {
    return this.http.put(`${_api}/api/actas/reg/transposeSelf/${id}`, { newciber });
  }

  deleteReg(id:any): Observable<any> {
    return this.http.delete(`${_api}/api/actas/reg/Trash/delete/${id}`);
  }


}
