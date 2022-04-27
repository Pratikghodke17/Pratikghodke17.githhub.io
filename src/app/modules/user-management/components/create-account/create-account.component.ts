import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent   {
  options = [
    {name: "Mobile (Rs 199/month)", id: "Mobile"},
    {name: "Standard (Rs 299/month)", id: "Standard"},
    {name: "Premium (Rs 499/month)", id: "Premium"},
    {name: "Premium Pro(Rs 699/month)", id: "PremiumPro"},
  ]
  questions = [
    {question: "What is the name of your favorite pet?", id: "pet"},
    {question: "What city were you born in?", id: "city"},
    {question: "What was the make of your first car?", id: "car"},
  ]
  constructor( private userService : ServiceService , private router : Router) { }
  public firstName = ''
  public lastName = ''
  public email = ''
  public password = ''
  public subscription = ''
  public question = ''
  public answer = ''
  public mgs = ''
  objPost = Response;


  createaccount(){
    var acc = new Account();
    acc.firstName = this.firstName;
    acc.lastName = this.lastName;
    acc.email = this.email;
    acc.password = this.password;
    acc.subscription = this.subscription;
    acc.question = this.question;
    acc.answer = this.answer;
    console.log(acc);
    this.userService.createaccount(acc).subscribe(
      (resp: any) => {
      console.log(resp);
      alert('User Added successfully');
      this.router.navigate(['/login']);
    }
    );
  }
}


export class Account {
  firstName: string | undefined;
  lastName!: string;
  email: string | undefined;
  password: string | undefined;
  subscription: string | undefined;
  question : string | undefined;
  answer :  string | undefined;
}

export class Response {
  mgs : string | undefined;
}