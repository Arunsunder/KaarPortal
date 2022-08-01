import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-overalldashboard',
  templateUrl: './overalldashboard.component.html',
  styleUrls: ['./overalldashboard.component.css']
})
export class OveralldashboardComponent implements OnInit {

  selectedItem='';
  vendorName=localStorage.getItem("currentUser");

  constructor(public commonservice:CommonService,private route:Router) { }

  ngOnInit(): void {
    this.selectedItem=this.commonservice.selectedItemForVendor;
    console.log(this.selectedItem)
  }

  profile(){
    this.route.navigateByUrl('/vendor/profile');
  }

}
