import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../service/employee-service.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.css']
})
export class LeaverequestComponent implements OnInit {

  constructor(private empService:EmployeeServiceService) { }

  employeeid=localStorage.getItem('currentUser');
  displayedColumns:string[]=['empno','begindate','enddate','absdays','abshours','type','abstype']
  dataSource:any

  ngOnInit(): void {
    this.empService.empLeaverequest(this.employeeid).subscribe(data=>{
      var resData=JSON.parse(JSON.stringify(data));
      let final;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(resData, (err, result) => {
        final = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(final));
      var jsonEnvelope = jsonObject['SOAP:ENVELOPE'];
      console.log(jsonObject)
      var jsonBody = jsonEnvelope['SOAP:BODY']['0']['NS0:ZFM_EMP_LEAVEREQ_AS.RESPONSE']['0']['RESULT']['0']['ITEM'];
      console.log(jsonBody);
      this.dataSource=jsonBody;
    })
  }

}
