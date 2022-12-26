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



}
