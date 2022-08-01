import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../service/customerservice.service';
import * as xml2js from 'xml2js'; 


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private custService:CustomerserviceService) { }

  customerId = localStorage.getItem('currentUser');
  displayedColumns: string[] = ['salesdocument', 'creatby', 'creaton', 'transdata','billingamount','loginsystem','time','taxamt','netvalue','doccurrency'];
  dataSource: any

  ngOnInit(): void {
    this.custService.invoiceList(this.customerId).subscribe(data=>{
      var strData=JSON.parse(JSON.stringify(data));
      var finjson;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(strData, (err, result) => {
        finjson = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(finjson));
     
      var jsonbody=jsonObject['SOAP:ENVELOPE']['SOAP:BODY']['0']['NS0:ZFM_CU_CP_FI_INVOICE_LIST.RESPONSE']['0']['RESULT']['0']['ITEM'];
    
      this.dataSource=jsonbody;
    })
  }

}
