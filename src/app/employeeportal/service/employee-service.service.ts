import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  connUrl="http://localhost:5000";
  loggedin: boolean = false;

  empLogin(username:any,password:any){
    let params=new HttpParams();
    params=params.append('username',username);
    params=params.append('password',password);
    return this.http.get(this.connUrl+'/empLogin',{params});
  }

  empProfile(username:any){
    let params=new HttpParams();
    params=params.append('empId',username);
    return this.http.get(this.connUrl+'/empDetail',{params});
  }

  empPayroll(username:any){
    let params=new HttpParams();
    params=params.append('empId',username);
    return this.http.get(this.connUrl+'/empPayroll',{params});
  }

  empPayslip(username:any,seqno:any,payslipvarient:any){
    let params=new HttpParams();
    params=params.append('empId',username);
    params=params.append('seqNo',seqno);
    params=params.append('paySlipvar',payslipvarient);
    return this.http.get(this.connUrl+'/empPayslip',{params});
  }

  empLeaverequest(username:any){
    let params=new HttpParams();
    params=params.append('empId',username);
    return this.http.get(this.connUrl+'/empLeavereq',{params});
  }

}
