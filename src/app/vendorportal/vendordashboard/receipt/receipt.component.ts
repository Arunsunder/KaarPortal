import { Component, OnInit } from '@angular/core';
import { VendorserviceService } from '../../service/vendorservice.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  constructor(private vendService:VendorserviceService) { }

  customerId = localStorage.getItem('currentUser');
  displayedColumns: string[] = ['docnum', 'docyear', 'docdate', 'entrydate', 'entrytime', 'type', 'username', 'slipvers'];
  dataSource: any

  ngOnInit(): void {
    this.vendService.goodsList(this.customerId).subscribe(data=>{
      var strData=JSON.parse(JSON.stringify(data));
      var finjson;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(strData, (err, result) => {
        finjson = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(finjson));
      var jsonbody=jsonObject['SOAP:ENVELOPE']['SOAP:BODY']['0']['NS0:ZFM_00VP_GR_LIST_AS.RESPONSE']['0']['HEADER_TABLE']['0']['ITEM'];
      this.dataSource=jsonbody;
      
    })
  }

}
