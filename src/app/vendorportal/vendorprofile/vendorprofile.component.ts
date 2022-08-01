import { Component, OnInit } from '@angular/core';
import { VendorserviceService } from '../service/vendorservice.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-vendorprofile',
  templateUrl: './vendorprofile.component.html',
  styleUrls: ['./vendorprofile.component.css']
})
export class VendorprofileComponent implements OnInit {

  constructor(private vendService:VendorserviceService) { }

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
    this.vendService.vendProfile(this.customerID).subscribe(data=>{
      var wholeData = JSON.parse(JSON.stringify(data));
      let body;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(wholeData, (err, result) => {
        body = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(body));
      var jsonEnvelope = jsonObject['SOAP:ENVELOPE']; //NS0:ZFM_00VP_VENDOR_DETAIL_AS.RESPONSE
      var jsonBody = jsonEnvelope['SOAP:BODY']['0']['NS0:ZFM_00VP_VENDOR_DETAIL_AS.RESPONSE']['0']['E_GENERALDETAIL']['0'];
      this.Name = jsonBody.NAME;     //
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
