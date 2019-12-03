import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { TransferComponent } from './customer/transfer/transfer.component';
import { LoanComponent } from './customer/loan/loan.component';
import { CheckBalanceComponent } from './customer/check-balance/check-balance.component';
import { LoginComponent } from './login/login.component';
import { TransactionhistoryComponent } from './customer/transactionhistory/transactionhistory.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import {HttpClientModule} from '@angular/common/http';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { ToolbarService } from '@syncfusion/ej2-angular-grids';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProfileComponent,
    TransferComponent,
    LoanComponent,
    CheckBalanceComponent,
    LoginComponent,
    TransactionhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GridModule,
    HttpClientModule
  ],
  providers: [PageService, SortService, FilterService, GroupService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
