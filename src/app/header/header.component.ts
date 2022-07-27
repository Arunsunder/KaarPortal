import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerportal/service/customerservice.service';
import {AuthenticationService} from '../customerportal/authGuard/authentication.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private custService:CustomerserviceService,private authService:AuthenticationService) {
  }
   
  customerId=localStorage.getItem('currentUser');
  enableAboutus=true;
  enableLogout=false;
  ngOnInit(): void {
    if(this.customerId){
      this.enableAboutus=!this.enableAboutus;
      this.enableLogout=!this.enableLogout;
    }
  }
  logout(){
    this.enableAboutus=!this.enableAboutus;
    this.enableLogout=!this.enableLogout;
    this.authService.logout();
  }
  
  

}
