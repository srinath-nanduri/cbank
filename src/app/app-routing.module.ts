import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { ClogComponent } from './clog/clog.component';
import { CustSerComponent } from './cust-ser/cust-ser.component';
import { AccComponent } from './cust-ser/acc/acc.component';
import { CardsComponent } from './cust-ser/cards/cards.component';
import { CloansComponent } from './cust-ser/cloans/cloans.component';

import { FeedbackComponent } from './cust-ser/feedback/feedback.component';
import { IssueFormComponent } from './cust-ser/issue-form/issue-form.component';
import { TransactionsComponent } from './cust-ser/transactions/transactions.component';
import { DashComponent } from './dash/dash.component';
import { LandingComponent } from './landing/landing.component';
import { LoanformComponent } from './loanform/loanform.component';
import { LoansComponent } from './loans/loans.component';
import { PnfComponent } from './pnf/pnf.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { SettComponent } from './sett/sett.component';

export const routes: Routes = [
  {path: 'accounts', component: AccountsComponent},
  {path: 'loans', component: LoansComponent},
  {path: 'sett', component: SettComponent},
  {path: 'clog', component:ClogComponent},
  // {path: 'cust-ser', component:CustSerComponent},
  {path: 'cust-ser',  
  component: CustSerComponent,
  children : [
    { path: 'acc', component: AccComponent},
    { path: 'cloans', component: CloansComponent },
    { path: 'transactions', component: TransactionsComponent },
    { path: 'cards', component: CardsComponent },  
    {path:"issue-form",component:IssueFormComponent},
    {path: "feedback",component:FeedbackComponent}
]

  
},

  {path: 'dash', component:DashComponent},
  {path: 'landing', component:LandingComponent},
  {path: 'reg-form', component:RegFormComponent},
  {path: 'loanform', component:LoanformComponent},


  // {path: '', redirectTo:'/clog', pathMatch:'full'},
  {path: '', redirectTo:'/landing', pathMatch:'full'},

  {path: '**', component:PnfComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
