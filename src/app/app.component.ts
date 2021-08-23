import { Component, ViewChild } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(BarcodeScannerLivestreamComponent, {static: false})
  barcodeScanner: BarcodeScannerLivestreamComponent;

  @ViewChild("qrcode", {static : true}) qrcode: QRCodeComponent
  displayQr: boolean = false;
  barcodeValue;
  qrcodename: string;
  title = 'generated-qrcode';
  elementType: 'url' | 'canvas' | 'img' = 'url';
  qrCodeValue: string;
  qrDownloadLink: string;
  
  ngAfterViewInit() {
    this.barcodeScanner.start();
  }
 
  onValueChanges(result) {
    this.barcodeValue = result.codeResult.code;
    if(this.barcodeValue) {
      this.qrCodeValue = `MISHIPAY|EAN13|${this.barcodeValue}`;
      this.displayQr = true;
    }
  }

  downloadQrCode() {
    this.qrDownloadLink = document.getElementsByTagName('img')[0].src;
  }
}
