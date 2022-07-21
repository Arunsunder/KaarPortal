import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedItem='';
  constructor(public commonservice:CommonService) { }

  ngOnInit(): void {
    this.selectedItem=this.commonservice.selectedItem;
    console.log(this.selectedItem)
  }
  

}
