import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Acc, Accounts, HttpClientService, Payment, Transactions } from '../http-client.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  acc!:Accounts;
  nacc:Acc= new Acc("", 0, 0, "", 0, "");
  trans:Transactions[]=[];
  id!:number;
  flag!:boolean;
  f2!:string;
  temp:string = this.cookSer.get("user");

  p:Payment={
    id:0,
    raccno:"",
    amt:0.0,
    pin:""
  }

  // user!:string;
  user = this.temp.charAt(0).toUpperCase() + this.temp.slice(1);

  f1 = this.cookSer.get('logcorr');

  // acc = [{aid:'01', ano:'6024922002', atype:'Salary', abal:'22,042', abranch:'Kormangala', ahold:'Srinath'},
  //        {aid:'02', ano:'6492020022', atype:'Savings', abal:'12,04,533', abranch:'ECIL', ahold:'Srinath, Gunjan'},
  //        {aid:'03', ano:'6492120021', atype:'Savings', abal:'53,854', abranch:'Chembur', ahold:'Srinath'}]

  constructor( private _router:Router, private cookSer: CookieService, private httpClientService:HttpClientService) { }

  ngOnInit(): void {

    this.id = this.cookSer.get("userid") as unknown as number;

    this.httpClientService.valAcc(this.id).subscribe(
      response =>{
        this.flag=response as unknown as boolean;
        // console.log(typeof this.flag);   
        this.valFlag(this.flag);
      }
      
    )
    
  }

  reloadCurrentPage() {
    window.location.reload();
   }


  valFlag(f:boolean){
    if(f==true){
      this.f2 = "true";
      console.log(this.f2);
      this.getAcc();
    }
    else{
      this.f2 = "false";
      console.log(this.f2);
    }
  }


  getAcc():void{
    this.id = this.cookSer.get("userid") as unknown as number;


  this.httpClientService.getTranDetail(this.id).subscribe(
    response =>{
      
      this.trans=response;

    },
   );

   this.httpClientService.getAccDetails(this.id).subscribe(
    response =>{this.acc=response;},
   );
  }

  submit(form: NgForm){

    

    this.nacc.abal = form.value.funds as number;
    this.nacc.apin = form.value.pin;
    this.nacc.aclimit = 10000;
    this.nacc.ano=this.randomString();
    this.nacc.cid=this.cookSer.get("userid") as unknown as number;
    this.nacc.status="unblocked";

    this.httpClientService.addAcc(this.nacc).subscribe(data =>{

      alert("Account Created Successfully");
      this.reloadCurrentPage();
  
    });

  }

  pay(form: NgForm){

    this.p.id = this.cookSer.get("userid") as unknown as number;

    this.p.raccno = form.value.raccno;

    this.p.amt = form.value.amt as unknown as number;

    this.p.pin = form.value.pin;

    this.httpClientService.makePayment(this.p).subscribe(
      response => {
        alert(response);
        this.reloadCurrentPage();
        // alert("Money Sent!");
      });


  }




  no_val() {
    this._router.navigateByUrl('/clog');
    // return 1;
  }

  
    randomString() {
      let chars='0123456789';
      var result = '';
      for (var i = 10; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
  }

  // yopush(){
  //   this.acc.push({aid:'04', ano:'6492122006', atype:'Savings', abal:'49,283', abranch:'Earth', ahold:'Srinidhi'})
  // }
  

}
