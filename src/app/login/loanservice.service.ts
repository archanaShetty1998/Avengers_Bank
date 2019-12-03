import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoanserviceService {

  constructor(private http:HttpClient) { }

  getUserDetails(){

  	return this.http.get('http://localhost:8082/Customer');
  	
  }
}


