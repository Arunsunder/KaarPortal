import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http:HttpClient) { }
  
  connUrl:string="http://localhost:5000";
  loggedin: boolean = false;

  custLogin(username:string,password:string){
    let params=new HttpParams();
    params=params.append("username",username);
    params=params.append("password",password);
    return this.http.get(this.connUrl+"/custLogin",{params:params})
  }

  custProfile(custID:string){
    let params=new HttpParams();
    params=params.append("profile",custID)
    return this.http.get(this.connUrl+'/custProfile',{params})
  }

  salesList(custId:any){
    let params=new HttpParams();
    params=params.append("profile",custId);
    return this.http.get(this.connUrl+'/salesList',{params});
  }

  deliveryList(custId:any){
    let params=new HttpParams();
    params=params.append("profile",custId);
    return this.http.get(this.connUrl+'/deliveryList',{params});
  }

  inquiryList(custId:any){
    let params=new HttpParams();
    params=params.append("profile",custId);
    return this.http.get(this.connUrl+'/inquiryList',{params});
  }

  payAging(custID:any){
    let params=new HttpParams();
    params=params.append("profile",custID);
    return this.http.get(this.connUrl+'/payAging',{params});
  }

  creditMemo(custID:any){
    let params=new HttpParams();
    params=params.append("profile",custID);
    return this.http.get(this.connUrl+'/creditMemo',{params});
  }

  debitMemo(custID:any){
    let params=new HttpParams();
    params=params.append("profile",custID);
    return this.http.get(this.connUrl+'/debitMemo',{params});
  }
}
