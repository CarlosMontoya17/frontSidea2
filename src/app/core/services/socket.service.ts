import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) {  }

  View(name: any, id: any, view:string): void{
    this.socket.emit("user_view", name, id, view);
  }

  Close(id: any): void {
    this.socket.emit("user_close", id);
  }

  Broadcast(): any {
    this.socket.on("user_broadcast", async (msg:any)=> {
      //{ to, data}
      //console.log(msg);
      
      // try{
      //   if(msg.to == id ){
      //     //console.log(msg.data);
      //   } 
      // }
      // catch{

      // }
    });
  }
}
