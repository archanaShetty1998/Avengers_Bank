import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferComponent } from './customer/transfer/transfer.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { LoanComponent } from './customer/loan/loan.component';
import { CheckBalanceComponent } from './customer/check-balance/check-balance.component';
import { TransactionhistoryComponent } from './customer/transactionhistory/transactionhistory.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
	{path:'',redirectTo:'Login',pathMatch:'full'},
	{path:'Login',component:LoginComponent},
	{path:'customer',component:CustomerComponent},
	{path:'profile',component:ProfileComponent},
	{path:'loan',component:LoanComponent},
	{path:'checkbalance',component:CheckBalanceComponent},
	{path:'transfer',component:TransferComponent},
	{path:'transactionhistory',component:TransactionhistoryComponent}

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
