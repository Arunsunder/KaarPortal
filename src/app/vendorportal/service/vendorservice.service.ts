import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorserviceService {

  constructor(private http:HttpClient) { }

  connUrl:string="http://localhost:5000";
  loggedin: boolean = false;

  vendLogin(username:string,password:string){
    let params=new HttpParams();
    params=params.append("username",username);
    params=params.append("password",password);
    return this.http.get(this.connUrl+"/vendLogin",{params:params})
  }

  vendProfile(vendID:any){
    let params=new HttpParams();
    params=params.append("vendID",vendID)
    return this.http.get(this.connUrl+'/vendProfile',{params})
  }

  vendInvList(vendID:any){
    let params=new HttpParams();
    params=params.append("vendID",vendID)
    return this.http.get(this.connUrl+'/vendInvList',{params})
  }
  vendInvDet(invNo:string,year:string){
    let params=new HttpParams();
    params=params.append("invNo",invNo)
    params=params.append("year",year)
    return this.http.get(this.connUrl+'/vendInvDet',{params})
  }

  payAging(vendID:any){
    let params=new HttpParams();
    params=params.append("vendID",vendID);
    return this.http.get(this.connUrl+'/vendPayAging',{params});
  }

  creditMemo(vendID:any){
    let params=new HttpParams();
    params=params.append("vendID",vendID);
    return this.http.get(this.connUrl+'/vendCredit',{params});
  }

  debitMemo(vendID:any){
    let params=new HttpParams();
    params=params.append("vendID",vendID);
    return this.http.get(this.connUrl+'/vendDebit',{params});
  }

  goodsList(vendID:any){
    let params=new HttpParams();
    params=params.append("vendID",vendID);
    return this.http.get(this.connUrl+'/vendGoodsList',{params});
  }
  
  goodsDetail(matNo:any){
    let params=new HttpParams();
    params=params.append("matNo",matNo);
    return this.http.get(this.connUrl+'/vendGoodsDet',{params});
  }

  purchaseList(vendID:any){
    let params=new HttpParams();
    params=params.append("vendID",vendID);
    return this.http.get(this.connUrl+'/vendPurchaseList',{params});
  }

  purchaseDet(poNum:any){
    let params=new HttpParams();
    params=params.append("poNum",poNum);
    return this.http.get(this.connUrl+'/vendPurchaseDet',{params});
  }

  requestforQuotList(vendID:any){
    let params=new HttpParams();
    params=params.append("vendID",vendID);
    return this.http.get(this.connUrl+'/vendRfqList',{params});
  }

  requestforQuotDet(rfqNo:any){
    let params=new HttpParams();
    params=params.append("rfqNo",rfqNo);
    return this.http.get(this.connUrl+'/vendRfqDet',{params});
  }
}
