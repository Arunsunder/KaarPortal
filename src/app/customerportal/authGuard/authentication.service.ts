import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  login(loginStatus:boolean,username:string){
    if(loginStatus){
      localStorage.setItem('loginStatus',"true");
      localStorage.setItem('currentUser',username);
      return true;
    }
    return false;
  }

  logout() {  
    localStorage.removeItem('currentUser');
    localStorage.removeItem('loginStatus');  
  } 

  public get loggedIn(): boolean {  
    return (localStorage.getItem('currentUser') !== null);  
  } 
}
