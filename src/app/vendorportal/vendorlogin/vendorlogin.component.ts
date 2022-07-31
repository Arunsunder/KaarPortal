import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/customerportal/authGuard/authentication.service';
import { VendorserviceService } from '../service/vendorservice.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorloginComponent implements OnInit {

  loginForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private vendService: VendorserviceService,private route:Router,private auth:AuthenticationService) { 
    if (this.auth.loggedIn) {  
      this.route.navigateByUrl('vendor/dashboard');  
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

    this.vendService.vendLogin(username, password).subscribe(data => {
      var resData=JSON.parse(JSON.stringify(data));
      let final;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(resData, (err, result) => {
        final = result;
      });
     var jsonObject = JSON.parse(JSON.stringify(final));
      var jsonEnvelope = jsonObject['SOAP:ENVELOPE'];
      console.log(jsonObject);
      var jsonBody = jsonEnvelope['SOAP:BODY']['0']['NS0:ZFM_00VP_LOGIN_AS.RESPONSE']['0']['RETURN'];
      if(jsonBody == 1){
        
        this.vendService.loggedin=true
        if(this.auth.login(this.vendService.loggedin,username)){
          this.route.navigateByUrl('/vendor/dashboard');
        }
      }else{
        console.log("failed login");
      }

    });
    


  }

}
