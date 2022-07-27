import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isloggedin:boolean=false;
  constructor(private route:Router) { }
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
    this.route.navigateByUrl('');
    window.location.reload();  
  } 

  public get loggedIn(): boolean {  
    return (localStorage.getItem('currentUser') !== null);  
  } 
}
