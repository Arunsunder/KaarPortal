import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerportal/service/customerservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private custService:CustomerserviceService) {
    if(this.loggedInStatus){
      console.log(this.loggedInStatus)
      this.enableLogout=!this.enableLogout;
      this.enableAboutus=!this.enableAboutus;
    }
    
   }
  loggedInStatus:boolean=this.custService.loggedin
  enableLogout=false;
  enableAboutus=true;
  ngOnInit(): void {
   
  }
  
  

}
