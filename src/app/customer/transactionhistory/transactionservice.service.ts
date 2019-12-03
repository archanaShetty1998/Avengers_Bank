import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionserviceService {

  constructor(private http:HttpClient) { }

  getUserDetails(){
  	return this.http.get('http://localhost:8082/Customer/Transaction/123456');
  }
}
