import { formatCurrency, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Aadhar, HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
// form and service decl
  aadharForm:FormGroup
  regForm:FormGroup
  accForm:FormGroup
  aadhar:Aadhar[]=[]

  //aadharForm vars
  isVerified= false
  showVerificationError = false

  //regForm vars
  isRegistered = false


  constructor(private formBuilder:FormBuilder, private httpClientService:HttpClientService) {
    this.aadharForm= this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern(/^\d{10}$/)]],
      PAN:['',[Validators.required]],
      Aadhar:['',[Validators.required,Validators.pattern(/^[0-9]{12}$/)]]
    })

    this.regForm=this.formBuilder.group({
      occupation:['',Validators.required],
      SOI:['',Validators.required],
      fname:['',Validators.required],
      lname:['',Validators.required],
      dob:[Date,Validators.required],
      gender:['',Validators.required],
      createPass:['',Validators.required],
      confirmPass:['',Validators.required],
      state:['',Validators.required],
      annualIncome:['',Validators.required],
      companybusinessName:['',Validators.required],
      termsAndCond:['',Validators.requiredTrue]
    })
    
    
    

    this.accForm=this.formBuilder.group({
      accType:['',Validators.required]
    })
   }

  

  ngOnInit(): void {
  }
  
  
  verifyAadhar() {
    this.httpClientService.valAadhar().subscribe(response => {
      // Process the response data here
      this.aadhar = response;
      let aadharValue = this.aadharForm.get('Aadhar')?.value;
      let mobileValue = this.aadharForm.get('mobile')?.value;
      this.isVerified = this.aadhar.some(obj => obj.aadhar==aadharValue && obj.mobile==mobileValue)
      this.showVerificationError = !this.isVerified

      console.log("Error " + this.showVerificationError)
      console.log(this.isVerified)
      console.log(aadharValue)
      console.log(this.aadhar)
    });
  }


}
