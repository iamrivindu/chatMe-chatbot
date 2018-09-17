import { Component, OnInit } from '@angular/core';
import {Login} from '../models/login.model';
import {LoginService} from '../services/login/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit() {
  }

  login(username,password){

    let login = new Login(username.value,password.value);
    console.log(login);
    this.loginService.login(login).subscribe(res =>{
      alert("Login Successful!")
      this.router.navigateByUrl('./chat');
    }, err =>{

      alert("Login Failed!")
    })
  }

}
