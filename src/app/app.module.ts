import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ClogComponent } from './clog/clog.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LoansComponent } from './loans/loans.component';
import { SettComponent } from './sett/sett.component';
import { CustSerComponent } from './cust-ser/cust-ser.component';
import { PnfComponent } from './pnf/pnf.component';
import { DashComponent } from './dash/dash.component';
import { LogInService } from './log-in.service';
import { CookieService } from 'ngx-cookie-service';
import { LandingComponent } from './landing/landing.component';

import {routes} from './app-routing.module';
import { RegFormComponent } from './reg-form/reg-form.component';
import { LoanformComponent } from './loanform/loanform.component';
import { AccComponent } from './cust-ser/acc/acc.component';
import { CustomerComponent } from './cust-ser/customer/customer.component';
import { CloansComponent } from './cust-ser/cloans/cloans.component';
import { CardsComponent } from './cust-ser/cards/cards.component';
import { TransactionsComponent } from './cust-ser/transactions/transactions.component';
import { FeedbackComponent } from './cust-ser/feedback/feedback.component';
import { IssueFormComponent } from './cust-ser/issue-form/issue-form.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClogComponent,
    AccountsComponent,
    LoansComponent,
    SettComponent,
    CustSerComponent,
    PnfComponent,
    DashComponent,
    LandingComponent,
    RegFormComponent,
    LoanformComponent,
    AccComponent,
    CustomerComponent,
    CloansComponent,
    CardsComponent,
    TransactionsComponent,
    FeedbackComponent,
    IssueFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [LogInService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
