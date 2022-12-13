import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClientService, Issues } from 'src/app/http-client.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit {

  name!:string;
  fname!:string;
  lname!:string;


  iss:Issues={
    
     iname:"",
     iaccno:"",
     iemail:"",
     imobile:"",
     idate:"",
     itype: "",
     idesc: ""

  };


  constructor(private httpClientService:HttpClientService) { }

  ngOnInit(): void {
  }


  submit(form: NgForm){

     let name = form.value.fname +" "+form.value.lname;


    this.iss.iname = name;
    this.iss.iaccno = form.value.accno;
    this.iss.iemail = form.value.email;
    this.iss.imobile = form.value.mobile;
    this.iss.idate = form.value.date;
    this.iss.itype = form.value.type;
    this.iss.idesc = form.value.desc;

    // console.log(this.iss);

    this.httpClientService.insIssue(this.iss)
    .subscribe( data => {
      alert("Issue noted. We will resolve this soon.");
    });

  }

}
