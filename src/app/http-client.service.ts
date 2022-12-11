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

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }
valAadhar():Observable<Aadhar[]>{
  return this.httpClient.get<Aadhar[]>('http://localhost:4141/Aadhar')
}
}
