import { Component, OnInit } from '@angular/core';
import {LoanserviceService} from './loanservice.service';
import {Customer} from './Customer';
import {Loan} from './Loan';
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
	 myArray:Array<Customer>=new Array();
	 loanArray:Array<Loan>=new Array();
    mod=new Customer(0,'','',0,'','',0,0,'','');
     loanMod=new Loan('','','','',0);
    getData:any[];
  constructor(private _httpService:LoanserviceService) { }

  ngOnInit() {

  	this._httpService.getUserDetails().subscribe((res:any[])=>{
        console.log(res);
        //this.getData=res;
        var x=JSON.parse(JSON.stringify(res));
        console.log(x.id);
        this.loanMod.id=x.id;
        this.loanMod.loan_type=x.loan_type;
        this.loanMod.interest_rate=x.interest_rate;
  })
  }

}
