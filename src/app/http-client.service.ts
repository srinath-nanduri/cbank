import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

export class Aadhar{
  constructor(
    public mobile:string,
    public aadhar:string,
    public email:string,
    public pan:string
  )
  {}
}

export class Accounts{
  constructor(
    public id:number,
    public ano:String,
    public cid:number,
    public abal:number,
    public apin:string,
    public aclimit: number,
    public status: string
  ) {}
}

export class Issues{
  constructor(
    public id:number,
    public ano:String,
    public cid:number,
    public abal:number,
    public apin:string,
    public aclimit: number,
    public status: string
  ) {}
}

export class Transactions{
  constructor(
    public id:number,
    public cid:number,
    public tdate:String,
    public ttime:String,
    public twithdraw:number,
    public tdeposit:number,
    public tbalance: number
  ) {}
}


export class Customer{
  constructor(
    public cfname:string,
    public clname:string,
    public cmobile:string,
    public cemail:string,
    public cdob:Date,
    public cgender:string,
    public cpass:string,
    public caadhar:string,
    public cpan:string,
    public coccupation:string,
    public csoi:string,
    public cgrossincome:string,
    public cplaceofwork:string

  ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }
  valAadhar():Observable<Aadhar[]>{
  return this.httpClient.get<Aadhar[]>('http://localhost:4141/Aadhar')
}

  regInsert(customer: Customer): Observable<Customer> {
    console.log(customer)
    return this.httpClient.post<Customer>('http://localhost:4141/addCustomer', customer);
  }

  valUser(email:String, pass:String){
    return this.httpClient.get<String[]>('http://localhost:4141/val/'+email+'/'+pass);
  
  }
  getAccDetails(id:number){
    return this.httpClient.get<Accounts>('http://localhost:4141/Account/'+id);
  }
  getTranDetail(id:number){
    return this.httpClient.get<Transactions[]>('http://localhost:4141/Transaction/'+id);
  }
  
}
