import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerserviceService } from '../service/customerservice.service';
import { AuthenticationService } from 'src/app/customerportal/authGuard/authentication.service';
import {parseString} from 'xml2js';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private custService: CustomerserviceService,private route:Router,private auth:AuthenticationService) { 
    if (this.auth.loggedIn) {  
      this.route.navigateByUrl('/customer/dashboard');  
    } 
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }



  get f() { return this.loginForm.controls; }

  onSubmit() {
    console.log(this.loginForm.value)
    var username = this.loginForm.value.username;
    var password = this.loginForm.value.password;
    this.custService.custLogin(username, password).subscribe(data => {
      var resData=JSON.parse(JSON.stringify(data));
      let final;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(resData, (err, result) => {
        final = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(final));
      var jsonEnvelope = jsonObject['SOAP:ENVELOPE'];
      var jsonBody = jsonEnvelope['SOAP:BODY'];
      var step=jsonBody['0'];
      var resp=step['NS0:ZFM_CUSTOMER_LOGIN_AS.RESPONSE']
      if(resp['0'].RETURN['0'] == 1){
        
        this.custService.loggedin=true
        console.log(this.custService.loggedin)
        if(this.auth.login(this.custService.loggedin,username)){
          this.route.navigateByUrl('/customer/dashboard');
        }
      }else{
        console.log("failed login");
      }

    });
    


  }


}
