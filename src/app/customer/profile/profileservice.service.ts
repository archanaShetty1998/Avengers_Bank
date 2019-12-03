import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Customer } from './Customer';
@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {
	
  constructor(private http:HttpClient) { }
  getUserDetails(){
  	return this.http.get('http://localhost:8082/Customer/123456');
  }
  setUserDetails(acc:number,cust:object){
  	console.log(cust);
  	return this.http.put<Customer>('http://localhost:8082/put/Customer/'+acc,cust);

  }
  
}
