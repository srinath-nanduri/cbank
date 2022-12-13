
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,AbstractControl,Validator} from '@angular/forms';
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
  customer1:Customer = new Customer("","","","","",this.myDate,"","","","","","","","");


  // 
  randomString() {

    let chars='0123456789';
    var result = '';
    for (var i = 10; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;

}




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
      annualIncome:['',Validators.required],
      companybusinessName:['',Validators.required],
      termsAndCond:['',Validators.requiredTrue],
      confirmPass:['',Validators.required]
    })
    
    
    

    this.accForm=this.formBuilder.group({
      accType:['',Validators.required]
    })
   }

  

  ngOnInit(): void {
  }
  
   
  
  verifyAadhar() {


    var aadharValue = this.aadharForm.get('Aadhar')?.value;
    var mobileValue = this.aadharForm.get('mobile')?.value;
    var emailValue = this.aadharForm.get('email')?.value;
    var panValue = this.aadharForm.get('PAN')?.value;
   

    this.customer1.caadhar=this.aadharForm.get('Aadhar')?.value;
    this.customer1.cmobile= this.aadharForm.get('mobile')?.value;
    this.customer1.cemail=this.aadharForm.get('email')?.value;
    this.customer1.cpan = this.aadharForm.get('PAN')?.value;


    this.httpClientService.valAadhar().subscribe(response => {
      // Process the response data here
      this.aadhar = response;
      this.isVerified = this.aadhar.some(obj => obj.aadhar==aadharValue && obj.mobile==mobileValue && obj.email==emailValue && obj.pan==panValue)
      this.showVerificationError = !this.isVerified
      
      console.log("Error " + this.showVerificationError)
      console.log(this.isVerified)
      console.log(aadharValue)
      console.log(this.aadhar)
    }); 
    
  }

  onSubmit() {
    // Get the data from the form
    this.customer1.crn = this.randomString()
    this.customer1.cgender = this.regForm.get('gender')?.value
    this.customer1.cdob=this.regForm.get('dob')?.value
    this.customer1.cfname=this.regForm.get('fname')?.value
    this.customer1.clname=this.regForm.get('lname')?.value
    this.customer1.cpass=this.regForm.get('confirmPass')?.value
    this.customer1.cgrossincome=this.regForm.get('annualIncome')?.value
    this.customer1.cplaceofwork=this.regForm.get('companybusinessName')?.value
    this.customer1.csoi=this.regForm.get('SOI')?.value
    this.customer1.coccupation=this.regForm.get('occupation')?.value

    //
    let createPassValue = this.regForm.get('createPass')?.value
    let currentPassValue = this.regForm.get('confirmPass')?.value
    
    if(currentPassValue!=createPassValue){
      alert('Passwords are not same')
      this.isRegistered= false
      console.log(currentPassValue)
      console.log(createPassValue)
    }
        
    
  
    // Use the HttpClient to make a POST request to your backend
    
    else{

    
    {
      this.isRegistered=true
    this.httpClientService.regInsert(this.customer1).subscribe(response => 
      {
        alert("Data sent successfully")
      })


      
    
    
    }
  }
  


    }

}
