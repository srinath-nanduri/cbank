import { formatCurrency, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  aadharForm:FormGroup
  regForm:FormGroup
  constructor(private formBuilder:FormBuilder) {
    this.aadharForm= this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern(/^\d{10}$/)]],
      PAN:['',[Validators.required]],
      Aadhar:['',[Validators.required,Validators.pattern(/^[0-9]{12}$/)]]
    })

    this.regForm=this.formBuilder.group({
      occupation:['',Validators.required],
      SOI:['',Validators.required],
      annualIncome:['',Validators.required],
      companybusinessName:['',Validators.required],
      accType:['',Validators.required],
      termsAndCond:['',Validators.requiredTrue]
    })
   }

  ngOnInit(): void {
  }


}
