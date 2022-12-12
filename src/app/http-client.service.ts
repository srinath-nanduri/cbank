import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

export class Aadhar{
  constructor(
    public mobile:string,
    public aadhar:string
  )
  {}
}

export class Customer{
  constructor(
    public cfname:string,
    public lname:string,
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
}
