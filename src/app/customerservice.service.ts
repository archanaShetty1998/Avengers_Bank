import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http:HttpClient) { }
  
  getUserDetails(){
  	return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
