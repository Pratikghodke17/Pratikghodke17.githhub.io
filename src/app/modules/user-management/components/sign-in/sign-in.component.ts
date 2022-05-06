import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

import { Account } from '../create-account/create-account.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit  {
  public email = ''
  public password = ''
  public question = ''
  public answer = ''
  response = Response
  isValid = '';
  err = ''

  questions = [
    {question: "What is the name of your favorite pet?", id: "pet"},
    {question: "What city were you born in?", id: "city"},
    {question: "What was the make of your first car?", id: "car"},
  ]

  constructor( private route: ActivatedRoute, private router: Router, private service: ServiceService) { }
  ngOnInit(): void {
    if (this.service.isLoggedIn()) {
      this.router.navigate(['userhome']);
    }
  }

  signin(){
    var acc = new Account();
    acc.email = this.email;
    acc.password = this.password;
    this.service.signin(acc).subscribe(
      (resp: any) => {
      console.log(resp);
      this.response = resp;
      this.isValid = resp.mgs;
      if (this.isValid === "valid" && resp.role === "customer") {
        console.log(this.isValid,resp.role);
        this.service.setToken('abcdefghijklmnopqrstuvwxyzcustomer');
        this.router.navigate(['/userhome']);
        return true
      }else if( this.isValid==="valid" && resp.role === "admin"){
         this.service.setToken('abcdefghijklmnopqrstuvwxyzadmin');
        this.router.navigate(['/adminhome']);
        return true
      }else {
        this.err = "Invalid User"
        alert(this.err);
        return false
      }
    }
    );
  }


  reset(){
    var acc = new Account();
    acc.email = this.email;
    acc.password = this.password;
    acc.question = this.question;
    acc.answer = this.answer;
    this.service.reset(acc).subscribe(
      (resp: any) => {
      console.log(resp);
      this.response = resp;
      this.isValid = resp.mgs;
      if (this.isValid === "valid" ) {
        console.log(this.isValid,resp.role);
        alert("Password Reset Successfull");
        this.password = ''
        return true
      }else {
        this.err = "Invalid Credentials"
        alert(this.err);
        return false
      }
    }
    );
  }
}

export class Response {
  mgs : string | undefined;
  role : string | undefined;
}

function subscribe(arg0: (resp: any) => boolean) {
  throw new Error('Function not implemented.');
}
