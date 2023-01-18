import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/app/core/models/auth.model';

const _api =  "https://actasalinstante.com:3030";

@Injectable({
  providedIn: 'root'
})
export class ManagmentService {

  constructor(private http: HttpClient) { }

  getMyClient(id:any): Observable<any> {
    return this.http.get(`${_api}/api/user/getMyClients/${id}`);
  }

  getMyPrices(id:any):Observable<any>{
    return this.http.get(`${_api}/api/user/getUserPrices/${id}`);
  }
  postUsers(user: UserInfo):Observable<any>{
   return this.http.post(`${_api}/api/user/createOne/`, user);
  }
  
  getMySuper(rol: string):Observable<any>{
    return this.http.get(`${_api}/api/user/getMySuperviser/${rol}`);
  }
  deleteUser(user: any ):Observable<any>{
    return this.http.delete(`${_api}/api/user/delete/`+user);
 
  }
  editUser(user: UserInfo, id: any):Observable<any>{
    return this.http.put(`${_api}/api/user/editPrice/${id}`, user);
  }




}
