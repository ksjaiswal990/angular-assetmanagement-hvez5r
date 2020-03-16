import { Component, OnInit } from '@angular/core';
import { User } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  alert : string;
  constructor() { }


  ngOnInit() {
  }
  loginValidate(){
    if(User.userName=="Kajalj990" && User.password=="kajal@12"){
      alert(
        "LoginSuccessfully"
      );
    }
    else
    {
      alert("Login Unsuccessfully");

      }
    }
  }

 
  
