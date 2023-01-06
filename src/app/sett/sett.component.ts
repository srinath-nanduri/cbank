import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {Form, FormBuilder,FormGroup,Validators} from '@angular/forms';
import { HttpClientService,Customer, Accounts } from '../http-client.service';


@Component({
  selector: 'app-sett',
  templateUrl: './sett.component.html',
  styleUrls: ['./sett.component.css']
})
export class SettComponent implements OnInit {
  showDiv=[true,true,true,true,true,true]
  limitForm:FormGroup
  setPin:FormGroup
  blockCard:FormGroup
  changePass:FormGroup
  changeEmail:FormGroup
  changeMobile:FormGroup

  name!:string;
  email!:string;
  id!:string;
  customer!:Customer
  currentLimit!:Accounts

  constructor(private cookSer:CookieService, private _router: Router,private formBuilder:FormBuilder,private httpClient:HttpClientService) { 
    this.limitForm=formBuilder.group({
      newLimit:['1000',Validators.required],
      PIN:['',Validators.required,Validators.pattern(/^\d{4}$/)]
    })

    this.setPin=formBuilder.group({
      currPin:['',Validators.required,Validators.pattern(/^\d{4}$/)],
      newPin:['',Validators.required]
    })
    this.blockCard=formBuilder.group({
      currPin:['',Validators.required]
    })

    this.changePass=formBuilder.group({
      currPass:['',Validators.required],
      newPass:['',Validators.required]
    })

    this.changeEmail=formBuilder.group({
      currEmail:['',Validators.required],
      newEmail:['',Validators.required]

    })

    this.changeMobile = formBuilder.group({
      currMobile:['',Validators.required],
      newMobile:['',Validators.required]

      
    })
    
  }
  

  ngOnInit(): void {

    this.name=this.cookSer.get("user");
    this.email=this.cookSer.get("email");
    this.id = this.cookSer.get("userid");
    
    

  }


  

  toggleDisplay(i:number){
    this.showDiv[i]=!this.showDiv[i];
    return this.showDiv[i];
    
  }

  changeLimitSubmit(){
    let id = this.cookSer.get('userid');
    let newLimit = this.limitForm.get('newLimit')?.value
    let cPin = this.limitForm.get('PIN')?.value
    console.log(cPin)

    this.httpClient.limitChange(id,cPin,newLimit).subscribe(response =>{
      console.log(response)
      alert('New Limit Set!')
    })
  }


  changePinSubmit(){
    let id = this.cookSer.get('userid');
    let cPin = this.setPin.get('currPin')?.value
    let nPin = this.setPin.get('newPin')?.value

    console.log(cPin,nPin)

    this.httpClient.pinChange(id,cPin,nPin).subscribe(response =>{
      console.log(response)
      alert('Pin Changed')
    })
  }

  changeStatusSubmit(){
    let id = this.cookSer.get('userid');
    let cPin = this.blockCard.get('currPin')?.value

    this.httpClient.statusChange(id,cPin).subscribe(response =>{
      console.log(response)
      alert('Status Changed')
    })

  }

  
  changePassSubmit(){
    let id= this.cookSer.get('userid') ;
    let cpass = this.changePass.get('currPass')?.value;
    let npass = this.changePass.get('newPass')?.value;

    console.log(cpass, npass);

        this.httpClient.passChange(id, cpass, npass).subscribe(response => {

        
          alert("Password Updated");

        })
  }

  reloadCurrentPage() {
    window.location.reload();
   }

  changeEmailSubmit(){
    let id = this.cookSer.get('userid')
    let cemail = this.changeEmail.get('currEmail')?.value
    let nemail = this.changeEmail.get('newEmail')?.value
    this.cookSer.set("email", nemail);

    console.log(cemail,nemail)
    this.httpClient.emailChange(id,cemail,nemail).subscribe(response =>{
      alert("Email Updated");
    })
  }

  changeMobileSubmit(){
    let id = this.cookSer.get('userid')
    let cmobile = this.changeMobile.get('currMobile')?.value
    let nmobile = this.changeMobile.get('newMobile')?.value

    console.log(cmobile,nmobile)
    this.httpClient.mobileChange(id,cmobile,nmobile).subscribe(response =>{
      alert("Mobile Number Updated");
    })
  }


  logout(){
    this.cookSer.set('logcorr', 'false');
    this.cookSer.set('user', 'User');
    this._router.navigateByUrl('/dash');
    this.reloadCurrentPage();
    // this.d = this.cookSer.get('logcorr');
    
  }

  	
  f1 = this.cookSer.get('logcorr');
  no_val() {
    this._router.navigateByUrl('/clog');
    // return 1;
  }

}
