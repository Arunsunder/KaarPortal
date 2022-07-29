import { Component, OnInit } from '@angular/core';

import * as xml2js from 'xml2js';
import { EmployeeServiceService } from '../../service/employee-service.service';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {

  constructor(private empService:EmployeeServiceService) { }

  employeeid=localStorage.getItem('currentUser');

  ngOnInit(): void {
    this.empService.empPayroll(this.employeeid).subscribe(data=>{
      var resData=JSON.parse(JSON.stringify(data));
      let final;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(resData, (err, result) => {
        final = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(final));
      var jsonEnvelope = jsonObject['SOAP:ENVELOPE'];
      console.log(jsonObject)
      var jsonBody = jsonEnvelope['SOAP:BODY']['0']['NS0:ZFM_EMP_PAYROLL_AS.RESPONSE']['0']['RESULT']['0']['ITEM'];
      console.log(jsonBody);
    })
  }

}
