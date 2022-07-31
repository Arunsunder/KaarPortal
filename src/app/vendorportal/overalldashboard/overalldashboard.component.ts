import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-overalldashboard',
  templateUrl: './overalldashboard.component.html',
  styleUrls: ['./overalldashboard.component.css']
})
export class OveralldashboardComponent implements OnInit {

  selectedItem='';

  constructor(public commonservice:CommonService) { }

  ngOnInit(): void {
    this.selectedItem=this.commonservice.selectedItemForVendor;
    console.log(this.selectedItem)
  }

}
