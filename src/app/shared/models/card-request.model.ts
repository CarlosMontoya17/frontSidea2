export interface cardRequest {
    Id: string;
    Background: string;
    Title: string;
    Type: string;
    Search: searchCURP | searchCadena | any;
    Date: string;
    Filename: string;
    Available: boolean;
    Downloaded: boolean;
    Comments: string;
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