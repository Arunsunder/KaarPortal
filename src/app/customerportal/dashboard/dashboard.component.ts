import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { CustomerserviceService } from '../service/customerservice.service';
import * as xml2js from 'xml2js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedItem = '';
  customerID: any;
  Name: any;
  
  constructor(public commonservice: CommonService, public custService: CustomerserviceService,private route:Router) { }

  ngOnInit(): void {
    this.selectedItem = this.commonservice.selectedItem;
    this.customerID = localStorage.getItem('currentUser');
    this.custService.custProfile(this.customerID).subscribe(data => {
      var wholeData = JSON.parse(JSON.stringify(data));
      let body;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(wholeData, (err, result) => {
        body = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(body));
      var jsonEnvelope = jsonObject['SOAP:ENVELOPE'];
      var jsonBody = jsonEnvelope['SOAP:BODY']['0']['NS0:ZFM_CUSTOMER_PROFILE_AS.RESPONSE']['0']['CUSTOMERADDRESS']['0'];
      this.Name = jsonBody.NAME_2;

    })

  }
  profile(){
    this.route.navigateByUrl('/customer/profile');
  }


}
