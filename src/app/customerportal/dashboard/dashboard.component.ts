import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { CustomerserviceService } from '../service/customerservice.service';
import * as xml2js from 'xml2js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedItem = '';
  customerID: any;
  Name: any;
  Region: any;
  Country: any;
  MobileNumber: any;
  Street: any;
  Pincode: any;
  Salutation: any;
  Language: any;
  City: any;
  constructor(public commonservice: CommonService, public custService: CustomerserviceService) { }

  ngOnInit(): void {
    this.selectedItem = this.commonservice.selectedItem;
    console.log(this.selectedItem)
    this.customerID = localStorage.getItem('currentUser');
    this.custService.custProfile(this.customerID).subscribe(data => {
      console.log(data);
      var wholeData = JSON.parse(JSON.stringify(data));
      let body;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(wholeData, (err, result) => {
        body = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(body));
      var jsonEnvelope = jsonObject['SOAP:ENVELOPE'];
      var jsonBody = jsonEnvelope['SOAP:BODY'];
      var step = jsonBody['0'];
      var resp = step['NS0:ZFM_CUSTOMER_PROFILE_AS.RESPONSE'];
      var mainIndex = resp['0'].CUSTOMERADDRESS;
      this.Name = mainIndex['0'].NAME_2;
      this.Region = mainIndex['0'].REGION;
      this.Country = mainIndex['0'].COUNTRY;
      this.MobileNumber = mainIndex['0'].TELEPHONE;
      this.Street = mainIndex['0'].STREET;
      this.Salutation = mainIndex['0'].FORMOFADDR;
      this.Pincode = mainIndex['0'].POSTL_CODE;
      this.City = mainIndex['0'].CITY;
      this.Language = mainIndex['0'].LANGU_ISO;

    })

  }


}
