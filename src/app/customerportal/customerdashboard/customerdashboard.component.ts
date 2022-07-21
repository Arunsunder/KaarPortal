import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {


  listItems = [
    { linkTitle: 'Inquiry data', link: '/inquiry' },
    { linkTitle: 'Sale order data', link: '/salesorder'},
    { linkTitle: 'List of Delivery', link: '/deliverylist' },
  ];

  constructor(public commonservice:CommonService) { }

  ngOnInit(): void {
  }
  
  handleClick(selectedItem:any) {
    this.commonservice.selectedItem= selectedItem.linkTitle;
    console.log(this.commonservice.selectedItem)
  }

}
