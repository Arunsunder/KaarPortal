import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../service/customerservice.service';

@Component({
  selector: 'app-salesorder',
  templateUrl: './salesorder.component.html',
  styleUrls: ['./salesorder.component.css']
})
export class SalesorderComponent implements OnInit {

  
  constructor(private custService:CustomerserviceService) { }
  customerId=localStorage.getItem('currentUser');
  ngOnInit(): void {
    console.log(this.customerId);
  }
  

}
