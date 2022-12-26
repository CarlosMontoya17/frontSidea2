export interface cardFilter {
    Id: number;
    Title: string;
    Type: 'Searcher' | 'Dropdown';
    Width: number;
    Content: contentDropdown | null;
}


export interface contentDropdown {
    Default: string;
    Options: any[];
    Key: string;
}


export interface actionEmitter {
    Source: number;
    Value: any;
}