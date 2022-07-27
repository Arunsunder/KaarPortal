import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../service/customerservice.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(private custService:CustomerserviceService) { }

  customerId=localStorage.getItem('currentUser');

  displayedColumns: string[] = ['billdocnum', 'compcode', 'amount', 'docdate','finyear','finperiod','itemnum','currency','taxcode'];
  dataSource:any

  ngOnInit(): void {
    this.custService.payAging(this.customerId).subscribe(data=>{

      var strData=JSON.parse(JSON.stringify(data));
      var finjson;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(strData, (err, result) => {
        finjson = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(finjson));
      var jsonbody=jsonObject['SOAP:ENVELOPE']['SOAP:BODY']['0']['NS0:ZFM_CU_CP_FI_CUS_PAYMT_AGING.RESPONSE']['0']['IT_ITEMDATA']['0']['ITEM'];
      this.dataSource=jsonbody;
    })
  }

}
