export interface tableModal {
    Columns: tableColumn[],
    Data: any
}

export interface tableColumn {
    Key: string | boolean,
    Display: string
}