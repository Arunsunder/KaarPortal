import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../service/customerservice.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  constructor(private custService:CustomerserviceService) { }
  customerId=localStorage.getItem('currentUser');

  displayedColumns: string[] = ['salesdocument', 'creatby', 'creaton', 'valfrom','valto','prob','time','matdate','coarea','reqdeliverydate','doccurrency'];
  dataSource:any
  ngOnInit(): void {
    this.custService.inquiryList(this.customerId).subscribe(data=>{
      var strData=JSON.parse(JSON.stringify(data));
      var finjson;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(strData, (err, result) => {
        finjson = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(finjson));
      console.log(jsonObject);
      var jsonbody=jsonObject['SOAP:ENVELOPE']['SOAP:BODY']['0']['NS0:ZFM_CU_CP_SD_INQUIRY_LIST.RESPONSE']['0']['ITEM_HEADER']['0']['ITEM'];
      console.log(jsonbody)
      this.dataSource=jsonbody;

    })

  }

}
