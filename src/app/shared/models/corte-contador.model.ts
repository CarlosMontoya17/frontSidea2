export interface contadorCorte {
    actaNacimiento: number,
    actaDefuncion: number,
    actaMatrimonio: number,
    actaDivorcio: number,
    semanasCotizadas: number,
    nss: number,
    rfc: number,
    cfe: number,
    constaciaDerechos: number,
    constaciaInhabili: number,
    totalActas: number
}

export interface ContadorTable {
    Label: string,
    Value: number,
    Marked: boolean
}