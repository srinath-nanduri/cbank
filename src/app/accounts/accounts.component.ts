import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Accounts, HttpClientService, Transactions } from '../http-client.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  acc!:Accounts;
  trans:Transactions[]=[];
  id!:number;
  temp:string = this.cookSer.get("user");
  // user!:string;
  user = this.temp.charAt(0).toUpperCase() + this.temp.slice(1);

  f1 = this.cookSer.get('logcorr');

  // acc = [{aid:'01', ano:'6024922002', atype:'Salary', abal:'22,042', abranch:'Kormangala', ahold:'Srinath'},
  //        {aid:'02', ano:'6492020022', atype:'Savings', abal:'12,04,533', abranch:'ECIL', ahold:'Srinath, Gunjan'},
  //        {aid:'03', ano:'6492120021', atype:'Savings', abal:'53,854', abranch:'Chembur', ahold:'Srinath'}]

  constructor( private _router:Router, private cookSer: CookieService, private httpClientService:HttpClientService) { }

  ngOnInit(): void {

    this.id = this.cookSer.get("userid") as unknown as number;

    this.httpClientService.getTranDetail(this.id).subscribe(
      response =>{this.trans=response;},
     );

     this.httpClientService.getAccDetails(this.id).subscribe(
      response =>{this.acc=response;},
     );

  }

  no_val() {
    this._router.navigateByUrl('/clog');
    // return 1;
  }


  // yopush(){
  //   this.acc.push({aid:'04', ano:'6492122006', atype:'Savings', abal:'49,283', abranch:'Earth', ahold:'Srinidhi'})
  // }
  

}
