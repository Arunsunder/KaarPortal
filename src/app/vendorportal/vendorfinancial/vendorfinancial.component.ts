import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-vendorfinancial',
  templateUrl: './vendorfinancial.component.html',
  styleUrls: ['./vendorfinancial.component.css']
})
export class VendorfinancialComponent implements OnInit {

  listItems = [
    { linkTitle: 'Invoice details', link: '/invoice' },
    { linkTitle: 'Payments and aging', link: '/payments'},
    { linkTitle: 'Credit/Debit memo', link: '/memo' }
  ]; 


  constructor(public commonservice:CommonService) { }

  ngOnInit(): void {
  }

  handleClick(selectedItem:any) {
    this.commonservice.selectedItemForVendor= selectedItem.linkTitle;
    console.log(this.commonservice.selectedItemForVendor)
  }

}
