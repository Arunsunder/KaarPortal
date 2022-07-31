import { Component, OnInit } from '@angular/core';
import * as xml2js from 'xml2js';
import { VendorserviceService } from '../../service/vendorservice.service';

@Component({
  selector: 'app-credit-debit',
  templateUrl: './credit-debit.component.html',
  styleUrls: ['./credit-debit.component.css']
})
export class CreditDebitComponent implements OnInit {

  constructor(private vendService:VendorserviceService) { }

  customerId=localStorage.getItem('currentUser');
  displayedColumns: string[] = ['billdocnum', 'compcode', 'amount', 'docdate','finyear','finperiod','itemnum','currency','taxcode'];
  dataSource:any

  displayedColumnsDebit:string[]=['billdocnum', 'compcode', 'amount', 'docdate','finyear','finperiod','itemnum','currency','taxcode']
  dataSourceDebit:any

  ngOnInit(): void {
    this.vendService.creditMemo(this.customerId).subscribe(data=>{
      var strData=JSON.parse(JSON.stringify(data));
      var finjson;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(strData, (err, result) => {
        finjson = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(finjson));
      //console.log(jsonObject);
      var jsonbody=jsonObject['SOAP:ENVELOPE']['SOAP:BODY']['0']['NS0:ZFM_00VP_CREDIT_MEMO_AS.RESPONSE']['0']['RESULT']['0']['ITEM'];
      console.log(jsonbody);
      this.dataSource=jsonbody;

    })




    this.vendService.debitMemo(this.customerId).subscribe(data=>{
      var strData=JSON.parse(JSON.stringify(data));
      var finjson;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(strData, (err, result) => {
        finjson = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(finjson));
      //console.log(jsonObject);
      var jsonbody=jsonObject['SOAP:ENVELOPE']['SOAP:BODY']['0']['NS0:ZFM_00VP_DEBIT_MEMO_AS.RESPONSE']['0']['RESULT']['0']['ITEM'];
      console.log(jsonbody)
      this.dataSourceDebit=jsonbody;

    })
  }

}
