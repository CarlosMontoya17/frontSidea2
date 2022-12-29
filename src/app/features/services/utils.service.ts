import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }


  b64ToBlob(b64:any, contentType: string = 'application/pdf'): any{
    contentType = contentType || '';
    let sliceSize = 512;
    var byteCharacters = atob(b64);
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);
      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }


  downloadPDF(b64:any, filename: string): void {
    let blob = this.b64ToBlob(b64);
    let a = document.createElement('a');
    var url = URL.createObjectURL(blob);
    a.href = url;
    a.download = String(filename);
    a.click();
    URL.revokeObjectURL(url);
    a.remove();
  }

  downloadBlob(blob:any, filename: string): void{
    let a = document.createElement('a');
    var url = URL.createObjectURL(blob);
    a.href = url;
    a.download = String(filename);
    a.click();
    URL.revokeObjectURL(url);
    a.remove();
  }

  SetState(CURP: string) {
    let res = CURP.charAt(11) + CURP.charAt(12);
    switch (res) {
      case 'AS': {
        return 'AGUASCALIENTES';
        break;
      }
      case 'BC': {
        return 'BAJA CALIFORNIA';
        break;
      }
      case 'BS': {
        return 'BAJA CALIFORNIA SUR';
        break;
      }
      case 'CC': {
        return 'CAMPECHE';
        break;
      }
      case 'CS': {
        return 'CHIAPAS';
        break;
      }
      case 'CH': {
        return 'CHIHUAHUA';
        break;
      }
      case 'DF': {
        return 'DISTRITO FEDERAL';
        break;
      }
      case 'CL': {
        return 'COAHUILA DE ZARAGOZA';
        break;
      }
      case 'CM': {
        return 'COLIMA';
        break;
      }
      case 'DG': {
        return 'DURANGO';
        break;
      }
      case 'GT': {
        return 'GUANAJUATO';
        break;
      }
      case 'GR': {
        return 'GUERRERO';
        break;
      }
      case 'HG': {
        return 'HIDALGO';
        break;
      }
      case 'JC': {
        return 'JALISCO';
        break;
      }
      case 'MC': {
        return 'MEXICO';
        break;
      }
      case 'MN': {
        return 'MICHOACAN';
        break;
      }
      case 'MS': {
        return 'MORELOS';
        break;
      }
      case 'NT': {
        return 'NAYARIT';
        break;
      }
      case 'NL': {
        return 'NUEVO LEON';
        break;
      }
      case 'OC': {
        return 'OAXACA';
        break;
      }
      case 'PL': {
        return 'PUEBLA';
        break;
      }
      case 'QT': {
        return 'QUERETARO';
        break;
      }
      case 'QR': {
        return 'QUINTANA ROO';
        break;
      }
      case 'SP': {
        return 'SAN LUIS POTOSI';
        break;
      }
      case 'SL': {
        return 'SINALOA';
        break;
      }
      case 'SR': {
        return 'SONORA';
        break;
      }
      case 'TC': {
        return 'TABASCO';
        break;
      }
      case 'TS': {
        return 'TAMAULIPAS';
        break;
      }
      case 'TL': {
        return 'TLAXCALA';
        break;
      }
      case 'VZ': {
        return 'VERACRUZ';
        break;
      }
      case 'YN': {
        return 'YUCATAN';
        break;
      }
      case 'ZS': {
        return 'ZACATECAS';
        break;
      }
      default: {
        return 'NACIDO EN EL EXTRANJERO';
        break;
      }
    }
  }


}
