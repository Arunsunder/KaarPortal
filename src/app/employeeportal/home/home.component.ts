import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router,private router: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  profile(){
    this.route.navigate(['/profile'],{relativeTo:this.router})
  }
  payslip(){
    this.route.navigate(['/payslip'],{relativeTo:this.router})
  }
  payroll(){
    this.route.navigate(['/payroll'],{relativeTo:this.router})
  }
  leaverequest(){
    this.route.navigate(['/leaverequest'],{relativeTo:this.router})
  }

}
