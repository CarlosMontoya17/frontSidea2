export interface paysFilter {
    Id: number;
    Title: string;
    Type: 'Searcher' | 'Dropdown';
    Width: number;
    Tooltip: string;
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