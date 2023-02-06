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

  getMyClient(): Observable<any> {
    return this.http.get(`${_api}/api/user/myClients/`);
  }

  getData(id:any):Observable<any>{
    return this.http.get(`${_api}/api/user/get/${id}`);
  }
  addUser(user: UserInfo):Observable<any>{
   return this.http.post(`${_api}/api/user/add/`, user);
  }
  
  getMySuper(rol: string):Observable<any>{
    return this.http.get(`${_api}/api/user/mySuperviser/${rol}`);
  }
  deleteUser(user: any ):Observable<any>{
    return this.http.delete(`${_api}/api/user/delete/`+user);
 
  }
  editUser(user: UserInfo, id: any):Observable<any>{
    return this.http.put(`${_api}/api/user/update/${id}`, user);
  }

  changePassword(password: string, id: any): Observable<any> {
    return this.http.put(`${_api}/api/user/password/edit/${id}`, { password });

  }

 changeservicios(id:any, newService:any){
  return this.http.put(`${_api}/api/update/services/`+id, { "servicios": newService });
  
 }



}
