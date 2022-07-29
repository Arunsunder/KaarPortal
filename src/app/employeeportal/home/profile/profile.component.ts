import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../service/employee-service.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private empService:EmployeeServiceService) { }

  employeeid=localStorage.getItem('currentUser');
  ngOnInit(): void {
    this.empService.empProfile(this.employeeid).subscribe(data=>{
      var resData=JSON.parse(JSON.stringify(data));
      let final;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(resData, (err, result) => {
        final = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(final));
      var jsonEnvelope = jsonObject['SOAP:ENVELOPE'];
      var jsonBody = jsonEnvelope['SOAP:BODY']['0']['NS0:ZFM_EMP_DET_AS.RESPONSE']['0']['RESULT']['0'];
      console.log(jsonBody);
    })
  }

}
