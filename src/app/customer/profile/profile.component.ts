import { Component, OnInit } from '@angular/core';
import { ProfileserviceService } from './profileservice.service';
import { Customer } from './Customer';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myArray:Array<Customer>=new Array();
    mod=new Customer(0,'','',0,'','',0,0,'','');
    getData:any[];
    


  constructor(private _httpService:ProfileserviceService) {


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
      
        //this.getData=res;
        var x=JSON.parse(JSON.stringify(res));
        console.log(x.amount);
        this.mod.account_no=x.account_no;
        this.mod.amount=x.amount;
        this.mod.dob=x.dob;
        this.mod.phone_no=x.phone_no;
        this.mod.password=x.password;
        this.mod.username=x.username;
        this.mod.name=x.name;
      })
  }

  updateProfile(){

      this._httpService.setUserDetails(this.mod.account_no,this.mod).subscribe( data => {
          alert("User created successfully."); 
        })
    
  }

 
}
