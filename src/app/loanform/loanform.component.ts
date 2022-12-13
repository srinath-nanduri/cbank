import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientService, Loan } from '../http-client.service';

@Component({
  selector: 'app-loanform',
  templateUrl: './loanform.component.html',
  styleUrls: ['./loanform.component.css']
})

export class LoanformComponent implements OnInit {

  loan:Loan = new Loan("","","","","","","","","","","","","");
  LoanForm:FormGroup
  
  constructor(private formBuilder:FormBuilder,private httpClientService:HttpClientService) {

    this.LoanForm= this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      phoneno:['',Validators.required],
      address:['',Validators.required],
      dob:['',Validators.required],
      currentocc:['',Validators.required],
      fname:['',Validators.required],
      comname:['',Validators.required],
      yoe:['',Validators.required],
      ltype:['',Validators.required],
      lamt:['',Validators.required],
      lperiod:['',Validators.required],
      roi:['',Validators.required],
      terms:['',Validators.requiredTrue],
      declare:['',Validators.requiredTrue]
    })

  }

 

 

 

  ngOnInit(): void {

  }

 

 addloan():void{

  this.httpClientService.addLoan(this.loan).subscribe(data =>{

    alert("Loan Apllied Successfully");

  });

  // console.log(this.loan);

 };

 

}