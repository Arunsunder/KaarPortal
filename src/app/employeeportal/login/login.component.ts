import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../service/employee-service.service';
import * as xml2js from 'xml2js';
import { AuthenticationService } from 'src/app/customerportal/authGuard/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,private empService:EmployeeServiceService,private route:Router,private auth:AuthenticationService) { }

  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
  
  
  get f() { return this.loginForm.controls; }

  onSubmit() {
    //this.route.navigateByUrl('/home');
    console.log(this.loginForm.value)
    var username = this.loginForm.value.username;
    var password = this.loginForm.value.password;
    this.empService.empLogin(username, password).subscribe(data => {
      var resData=JSON.parse(JSON.stringify(data));
      let final;
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(resData, (err, result) => {
        final = result;
      });
      var jsonObject = JSON.parse(JSON.stringify(final));
      var jsonEnvelope = jsonObject['SOAP:ENVELOPE'];
      var jsonBody = jsonEnvelope['SOAP:BODY']['0']['NS0:ZFM_EMP_LOGIN_AS.RESPONSE']['0']['RETURN'];
      if(jsonBody == 1){
        
        this.empService.loggedin=true
   
        if(this.auth.login(this.empService.loggedin,username)){
          this.route.navigateByUrl('/home');
        }
      }else{
        console.log("failed login");
      }

    });
    


  }




}
