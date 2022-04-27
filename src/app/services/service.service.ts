import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Account } from '../modules/user-management/components/create-account/create-account.component';



const endpoint = 'http://localhost:3000/';
@Injectable()
export class ServiceService {
  constructor(private http: HttpClient) { }
  
  
  // setToken(token: string): void {
  //   localStorage.setItem('token', token);
  // }

  // getToken(): string | null {
  //   return localStorage.getItem('token');
  // }

  // isLoggedIn() {
  //   return this.getToken() !== null;
  // }

  // logout() {
  //   localStorage.removeItem('token');
  //   this.router.navigate(['signin']);
  // }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }


  createaccount(acc:Account): Observable<any> {
    return this.http.post(endpoint + 'createAcc',acc).pipe(
      catchError(this.handleError)
    );
  }

  signin(acc:Account): Observable<any> {
    return this.http.post(endpoint + 'signin',acc).pipe(
      catchError(this.handleError)
    );
  }

  reset(acc:Account): Observable<any> {
    return this.http.post(endpoint + 'update',acc).pipe(
      catchError(this.handleError)
    );
  }


 
}