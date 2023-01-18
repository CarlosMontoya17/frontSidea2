import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleMixed } from 'src/app/shared/alerts';
import { DefaultPrices } from 'src/app/shared/models/default-prices.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private router: Router, private http: HttpClient) { }


  b64ToBlob(b64: any, contentType: string = 'application/pdf'): any {
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


  downloadPDF(b64: any, filename: string): void {
    let blob = this.b64ToBlob(b64);
    let a = document.createElement('a');
    var url = URL.createObjectURL(blob);
    a.href = url;
    a.download = String(filename);
    a.click();
    URL.revokeObjectURL(url);
    a.remove();
  }

  downloadBlob(blob: any, filename: string): void {
    let a = document.createElement('a');
    var url = URL.createObjectURL(blob);
    a.href = url;
    a.download = String(filename);
    a.click();
    URL.revokeObjectURL(url);
    a.remove();
  }

  downloadImage(data: any, filename: any): void {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
  }

  ErrorManage(err: HttpErrorResponse): void {
    if (err.status == 404) {
      SimpleMixed("warning", "NO ENCONTRADO");
    }
    else if (err.status == 401) {
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }

  WordGen(length: number): string {
    let _word = "";
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%&#';
    for (let i = 0; i < length; i++) {
      _word += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return _word;
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


  RolKey2Str(key: number): string {
    switch (key) {
      case 1:
        return 'Admin';
        break;
      case 2:
        return 'Supervisor';
        break;
      case 3:
        return 'Asesor';
        break;
      case 4:
        return 'Clientes';
        break;
      case 5:
        return 'Sucursal';
        break;
      case 6:
        return 'Empleado';
        break;
      default:
        break;
    }
    return '';
  }

  async DefaultPrices(username: string): Promise<any> {
    let _prices: any = await this.http.get<DefaultPrices>('assets/json/default-prices.json').toPromise();
    try {
      if (_prices[username]) {
        return _prices[username];
      }
    }
    catch {
    }
  }

}
