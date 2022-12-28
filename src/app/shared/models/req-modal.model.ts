export interface modalRequest {
    Title: string;
    TitleType: string;
    Types: string[];
    TitleSearch: string;
    Searches: string[];
    Primary: "Search" | "Types";
    DependencySearch: dependencySearch | null;
}

export interface dependencySearch {
    Type: string;
    Searches: string[];
}