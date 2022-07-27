import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { CustomerserviceService } from '../service/customerservice.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public custService: CustomerserviceService,private route:Router) { }

  customerID:any=localStorage.getItem('currentUser');
  Name: any;
  Region: any;
  Country: any;
  MobileNumber: any;
  Street: any;
  Pincode: any;
  Salutation: any;
  Language: any;
  City: any;
  Finname:any;
  Address:any;

  ngOnInit(): void {
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
      this.Name = jsonBody.NAME_2;     //
      this.Region = jsonBody.REGION;
      this.Country = jsonBody.COUNTRY;
      this.MobileNumber = jsonBody.TELEPHONE;
      this.Street = jsonBody.STREET;
      this.Salutation = jsonBody.FORMOFADDR; //
      this.Pincode = jsonBody.POSTL_CODE;
      this.City = jsonBody.CITY;
      this.Language = jsonBody.LANGU_ISO;

    })

  }

}
