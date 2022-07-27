import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../service/customerservice.service';
import * as xml2js from 'xml2js'; 

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {

  constructor(private custService:CustomerserviceService) { }
  
  customerId=localStorage.getItem('currentUser');
  displayedColumns: string[] = ['billdocnum', 'compcode', 'amount', 'docdate','finyear','finperiod','itemnum','currency','taxcode'];
  dataSource:any

  displayedColumnsDebit:string[]=['billdocnum', 'compcode', 'amount', 'docdate','finyear','finperiod','itemnum','currency','taxcode']
  dataSourceDebit:any
  ngOnInit(): void {
    this.custService.creditMemo(this.customerId).subscribe(data=>{
      var strData=JSON.parse(JSON.stringify(data));
      var finjson;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(strData, (err, result) => {
        finjson = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(finjson));
      var jsonbody=jsonObject['SOAP:ENVELOPE']['SOAP:BODY']['0']['NS0:ZFM_CU_CP_FI_CUST_CREDIT_MEMO.RESPONSE']['0']['IT_CUSTCREDITMEMO']['0']['ITEM'];
      this.dataSource=jsonbody;
    })
    

    this.custService.debitMemo(this.customerId).subscribe(data=>{
      var strData=JSON.parse(JSON.stringify(data));
      var finjson;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(strData, (err, result) => {
        finjson = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(finjson));
      console.log(jsonObject);
      var jsonbody=jsonObject['SOAP:ENVELOPE']['SOAP:BODY']['0']['NS0:ZFM_CU_CP_FI_CUST_DEBIT_MEMO.RESPONSE']['0']['IT_CUSTDEBITMEMO']['0']['ITEM'];
      console.log(jsonbody)
      this.dataSourceDebit=jsonbody;

    })



  }

}
