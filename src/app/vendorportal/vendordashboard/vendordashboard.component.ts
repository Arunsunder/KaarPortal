import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-vendordashboard',
  templateUrl: './vendordashboard.component.html',
  styleUrls: ['./vendordashboard.component.css']
})
export class VendordashboardComponent implements OnInit {

  listItems = [
    { linkTitle: 'Request For Quotation', link: '/quotation' },
    { linkTitle: 'Purchase Order', link: '/purchaseorder'},
    { linkTitle: 'Good Receipt', link: '/receipt' },
  ];

  constructor(public commonservice:CommonService) { }

  ngOnInit(): void {
  }

  handleClick(selectedItem:any) {
    this.commonservice.selectedItemForVendor= selectedItem.linkTitle;
    console.log(this.commonservice.selectedItemForVendor)
  }

}
