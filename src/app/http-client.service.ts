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

export class Loan{
  constructor(
      public firstname: string,
      public lastname: string,
      public email: string,
      public phoneno: string,
      public address: string,
      public dob: string,
      public currentocc: string,
      public comname: string,
      public yoe: string,
      public ltype: string,
      public lamt: string,
      public lperiod: string,
      public roi: string
  ){}
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

export class Acc{
  constructor(
    public ano:string,
    public cid:number,
    public abal:number,
    public apin:string,
    public aclimit: number,
    public status: string
  ) {}
}

export class Issues{
  constructor(
    public iname:string,
    public iaccno:string,
    public iemail:string,
    public imobile:string,
    public idate:string,
    public itype: string,
    public idesc: string
  ) {}
}

export class Feedback{

  constructor(
    public ftype:string,
    public fname:string,
    public femail:string,
    public fmobile:string,
    public fstaff:string,
    public fbranch:string,
    public fdesc:string,
  ){}

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

  insIssue(i:Issues){
    return this.httpClient.post<Issues>('http://localhost:4141/addIssue', i);
  }
  insFeedback(i: Feedback){
    return this.httpClient.post<Feedback>('http://localhost:4141/addFeedback', i);
  }
  public addLoan(loan: Loan) {
    return this.httpClient.post<Loan>("http://localhost:4141/addLoan",loan);
  }
  
  valAcc(id:number) {
    return this.httpClient.get<string>('http://localhost:4141/valAcc/'+id);
  }

  addAcc(a:Acc){
    return this.httpClient.post<Acc>('http://localhost:4141/addAcc', a);
  }

  passChange(id:string,currentPassword:string,newPassword:string){

    return this.httpClient.get<Customer>('http://localhost:4141/value/'+id + '/'+currentPassword +'/' + newPassword)
  }

  emailChange(id:string,currentEmail:string,newEmail:string){
    return this.httpClient.get<Customer>('http://localhost:4141/emailval/'+id+'/'+currentEmail+'/'+newEmail)
  }

  mobileChange(id:string,currentMobile:string,newMobile:string){
    return this.httpClient.get<Customer>('http://localhost:4141/mobileval/'+id+'/'+currentMobile+'/'+newMobile)
  }

  
}
