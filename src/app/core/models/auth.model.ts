export interface Auth {
  id: number;
  token: string;
  username: string;
}


export interface myInfo{
  id: number;
  username: string;
  rol: string;
  servicios: string;
  status: boolean;
}

export interface UserInfo {
  username: string, 
  password: string, 
  rol: string, 
  type:string, 
  idSuper: number, 
  precios: any, 
  status: boolean, 
  nombre: string
}