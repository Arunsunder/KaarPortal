import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../service/customerservice.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-saleorder',
  templateUrl: './saleorder.component.html',
  styleUrls: ['./saleorder.component.css']
})
export class SaleorderComponent implements OnInit {

  constructor(private custService:CustomerserviceService) { }
  customerId=localStorage.getItem('currentUser');

  displayedColumns: string[] = ['docnumber', 'credate', 'cretime', 'docdate','docstatus','itemnumber','material','plant','name','netprice','netvalue'];
  dataSource:any
  ngOnInit(): void {
    this.custService.salesList(this.customerId).subscribe(data=>{
      console.log(data);
      var strData=JSON.parse(JSON.stringify(data));
      var finjson;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(strData, (err, result) => {
        finjson = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(finjson));
      var jsonEnvelope = jsonObject['SOAP:ENVELOPE'];
      var jsonBody = jsonEnvelope['SOAP:BODY'];
      console.log(jsonBody);
      var step=jsonBody['0'];
      var resp=step['NS0:ZFM_SALESORDERLIST_AS.RESPONSE'];
      var fshead=resp['0'].TAB_SALES_ORDER;
      var snhead=fshead['0'].ITEM;
      this.dataSource=snhead;

    })
  }

}
