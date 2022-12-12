
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Aadhar, HttpClientService,Customer } from '../http-client.service';

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
  

  //aadharForm vars
  aadhar:Aadhar[]=[]
  isVerified= false
  showVerificationError = false

  //regForm vars
  isRegistered = false
  myDate = new Date();
  customer1:Customer = new Customer("","","","",this.myDate,"","","","","","","","");


  // 





  constructor(private formBuilder:FormBuilder, private httpClientService:HttpClientService) {
    this.aadharForm= this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern(/^\d{10}$/)]],
      PAN:['',[Validators.required]],
      Aadhar:['',[Validators.required,Validators.pattern(/^[0-9]{12}$/)]],
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
      
      var aadharValue = this.aadharForm.get('Aadhar')?.value;
      var mobileValue = this.aadharForm.get('mobile')?.value;
      var emailValue = this.aadharForm.get('email')?.value;
      var panCard = this.aadharForm.get('PAN')?.value;
      this.isVerified = this.aadhar.some(obj => obj.aadhar==aadharValue && obj.mobile==mobileValue)
      this.showVerificationError = !this.isVerified

      this.customer1.caadhar=this.aadharForm.get('Aadhar')?.value;
      this.customer1.cmobile= this.aadharForm.get('mobile')?.value;
      this.customer1.cemail=this.aadharForm.get('email')?.value;
      this.customer1.cpan = this.aadharForm.get('PAN')?.value;

      console.log("Error " + this.showVerificationError)
      console.log(this.isVerified)
      console.log(aadharValue)
      console.log(this.aadhar)
    }); 
  }

  onSubmit() {
    // Get the data from the form
    
  
    // Create a new customer object from the data
    this.customer1.cgender = this.regForm.get('gender')?.value
  
    // Use the HttpClient to make a POST request to your backend
    this.httpClientService.regInsert(this.customer1).subscribe(response => 
      {
        alert("Data sent successfully")
        this.isRegistered = true
      })
    }

}
