import { Component, OnInit } from '@angular/core';
import { VendorserviceService } from '../../service/vendorservice.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-paymentsandaging',
  templateUrl: './paymentsandaging.component.html',
  styleUrls: ['./paymentsandaging.component.css']
})
export class PaymentsandagingComponent implements OnInit {

  constructor(private vendService:VendorserviceService) { }
  customerId=localStorage.getItem('currentUser');

  displayedColumns: string[] = ['billdocnum', 'compcode', 'amount', 'docdate','finyear','finperiod','itemnum','currency','taxcode'];
  dataSource:any


  ngOnInit(): void {
    this.vendService.payAging(this.customerId).subscribe(data=>{
      var strData=JSON.parse(JSON.stringify(data));
      var finjson;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(strData, (err, result) => {
        finjson = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(finjson));
      console.log(jsonObject);
      var jsonbody=jsonObject['SOAP:ENVELOPE']['SOAP:BODY']['0']['NS0:ZFM_00VP_PAYAGING_AS.RESPONSE']['0']['RESULT']['0']['ITEM'];
      console.log(jsonbody);
      this.dataSource=jsonbody;
    })
  }

}
