import { Component, OnInit } from '@angular/core';
import { VendorserviceService } from 'src/app/vendorportal/service/vendorservice.service';
import { CustomerserviceService } from '../../service/customerservice.service';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private custService:CustomerserviceService) { }

  customerId = localStorage.getItem('currentUser');
  displayedColumns: string[] = ['billdocnum', 'compcode', 'amount', 'docdate', 'finyear', 'finperiod', 'itemnum', 'currency', 'taxcode'];
  dataSource: any

  ngOnInit(): void {
    /*this.custService.(this.customerId).subscribe(data=>{
      
    })*/
  }

}
