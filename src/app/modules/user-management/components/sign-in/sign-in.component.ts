import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
// import { AccountService } from '../../../create-account-service.service';
import { Account } from '../create-account/create-account.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit  {
  public email = ''
  public password = ''
  response = Response
  isValid = '';
  err = ''

  constructor( private route: ActivatedRoute, private router: Router, private service: ServiceService) { }
  ngOnInit(): void {
    // if (this.accountService.isLoggedIn()) {
    //   this.router.navigate(['userhome']);
    // }
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
      if (this.isValid === "true" && resp.role === "customer") {
        console.log(this.isValid,resp.role);
        // this.service.setToken('abcdefghijklmnopqrstuvwxyzcustomer');
        this.router.navigate(['/userhome']);
        return true
      }else if( this.isValid==="true" && resp.role === "admin"){
         // this.service.setToken('abcdefghijklmnopqrstuvwxyzadmin');
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

}

export class Response {
  mgs : string | undefined;
  role : string | undefined;
}