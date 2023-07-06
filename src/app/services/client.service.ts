import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  apiURL = 'http://localhost:8080/clients';
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
  };

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiURL)
    .pipe(retry(1), catchError(this.handleError))
  }

  handleError(error : any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`
    }
    return throwError(() => {
      return errorMessage;
    });
  };
}
