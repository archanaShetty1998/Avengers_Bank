import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TransferserviceService {

  constructor(private http:HttpClient) { }
  getUserDetails(){
  	return this.http.get('http://localhost:8082/Customer/123456');
  }
  setUserDetails(acc:number,amt:number){

  	return this.http.get('http://localhost:8082/Customer/Transfer/123456/'+amt+'/'+acc);
  	
  }
}
