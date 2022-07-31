import { Component, OnInit } from '@angular/core';
import { VendorserviceService } from '../../service/vendorservice.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private vendService: VendorserviceService) { }

  customerId = localStorage.getItem('currentUser');
  displayedColumns: string[] = ['invnum', 'invname', 'compcode', 'amount', 'docdate', 'finyear', 'entrydate', 'entrytime', 'invstatus','currency'];
  dataSource: any

  ngOnInit(): void {
    this.vendService.vendInvList(this.customerId).subscribe(data=>{
      var strData=JSON.parse(JSON.stringify(data));
      var finjson;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(strData, (err, result) => {
        finjson = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(finjson));
      var jsonbody=jsonObject['SOAP:ENVELOPE']['SOAP:BODY']['0']['NS0:ZFM_00VP_INVLIST_AS.RESPONSE']['0']['HEADER_TABLE']['0']['ITEM'];
      this.dataSource=jsonbody;
      console.log(jsonbody);
    })
  }

}
