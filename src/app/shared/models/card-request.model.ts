export interface cardRequest {
    Id: string;
    Background: string;
    Title: string;
    Type: string;
    Search: searchCURP | searchCadena | any;
    Date: string;
    Filename: string;
    Downloaded: boolean;
}


export interface searchCURP {
    Type: string;
    CURP: string;
    State: string;
}

export interface searchCadena {
    Type: string;
    Cadena: string;
}