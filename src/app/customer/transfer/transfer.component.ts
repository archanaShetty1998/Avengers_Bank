import { Component, OnInit } from '@angular/core';
import { TransferserviceService } from './transferservice.service';
import { Customer } from './Customer';
import { Transaction } from './Transaction';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  mod=new Customer(0,'','',0,'','',0,0,'','',0);
  transMod=new Transaction(0,'',0,0,0);
    getData:any[];
  constructor(private _httpService:TransferserviceService) { 
  	(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

  }

  ngOnInit() {

    this._httpService.getUserDetails().subscribe((res:any[])=>{
        console.log(res);
        //this.getData=res;
        var x=JSON.parse(JSON.stringify(res));
        console.log(x.amount);
        this.mod.account_no=x.account_no;
  
        
      })

  }


  TransferAmount(){
    console.log(this.mod.account_no1);
    console.log(this.mod.amount);
    //this._httpService.setUserDetails().subscribe();
    this._httpService.setUserDetails(this.mod.account_no1,this.mod.amount).subscribe((res:number)=>{
       console.log(res);
      })
      alert("Successfull Transfer....!");
  }
  

}
