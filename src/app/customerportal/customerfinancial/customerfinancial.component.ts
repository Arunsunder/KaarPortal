import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-customerfinancial',
  templateUrl: './customerfinancial.component.html',
  styleUrls: ['./customerfinancial.component.css']
})
export class CustomerfinancialComponent implements OnInit {

  
  listItems = [
    { linkTitle: 'Invoice details', link: '/invoice' },
    { linkTitle: 'Payments and aging', link: '/payments'},
    { linkTitle: 'Credit/Debit memo', link: '/memo' },
    { linkTitle: 'Overall sales data', link: '/overallsales' }
  ]; 

  constructor(public commonservice:CommonService) { }

  ngOnInit(): void {
  }
  handleClick(selectedItem:any) {
    this.commonservice.selectedItem= selectedItem.linkTitle;
    console.log(this.commonservice.selectedItem)
  }

}
