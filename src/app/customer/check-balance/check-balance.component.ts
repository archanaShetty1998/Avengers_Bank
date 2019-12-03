import { Component, OnInit } from '@angular/core';
import { Customer } from './Customer';
import { CheckbalanceserviceService } from './checkbalanceservice.service';
@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class CheckBalanceComponent implements OnInit {
	mod=new Customer(0,'','',0,'','',0,0,'','');
    getData:any[];
  constructor(private _httpService:CheckbalanceserviceService) { }

  ngOnInit() {

  		 this._httpService.getUserDetails().subscribe((res:any[])=>{
        console.log(res);
        //this.getData=res;
        var x=JSON.parse(JSON.stringify(res));
        console.log(x.amount);
        this.mod.account_no=x.account_no;
        this.mod.amount=x.amount;

  })
  	
  }
}


