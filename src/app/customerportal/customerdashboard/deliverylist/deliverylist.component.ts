import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../service/customerservice.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-deliverylist',
  templateUrl: './deliverylist.component.html',
  styleUrls: ['./deliverylist.component.css']
})
export class DeliverylistComponent implements OnInit {

  constructor(private custService:CustomerserviceService) { }
  customerId=localStorage.getItem('currentUser');
  displayedColumns: string[] = ['salesdocument', 'item', 'material', 'description','deliverygroup','barea','creaton','creatby','time','plantgroup'];
  dataSource:any
  ngOnInit(): void {
    this.custService.deliveryList(this.customerId).subscribe(data=>{
      //console.log(data);
      var strData=JSON.parse(JSON.stringify(data));
      var finjson;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(strData, (err, result) => {
        finjson = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(finjson));
      var jsonbody=jsonObject['SOAP:ENVELOPE']['SOAP:BODY']['0']['NS0:ZFM_CUSTOMER_DELIVERYLIST_AS.RESPONSE']['0']['RESULT_DELIVERY_ITEM']['0']['ITEM'];
      console.log(jsonbody)
      this.dataSource=jsonbody;
    })

  }

}
