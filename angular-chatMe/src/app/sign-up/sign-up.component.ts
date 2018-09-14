import { Component, OnInit } from '@angular/core';
import { Signup } from '../models/signup.model';
import {SignupService} from '../services/signup/signup.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private signupService : SignupService) { }

  ngOnInit() {
  }
  signup(name, email, password, verifypassword) {
    let signup: Signup = new Signup(name.value, email.value, password.value, verifypassword.value);
    console.log(signup);
    this.signupService.signup(signup).subscribe( res=> {
      alert("Sign Up Successful!");
    },err =>{
      alert("Sign Up Failed!");
    })
  }
}
