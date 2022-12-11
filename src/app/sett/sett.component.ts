import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {Form, FormBuilder,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-sett',
  templateUrl: './sett.component.html',
  styleUrls: ['./sett.component.css']
})
export class SettComponent implements OnInit {
  showDiv=[true,true,true]
  limitForm:FormGroup
  setPin:FormGroup
  blockCard:FormGroup
  constructor(private cookSer:CookieService, private _router: Router,private formBuilder:FormBuilder) { 
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
    
  }
  

  ngOnInit(): void {
  }


  

  toggleDisplay(i:number){
    this.showDiv[i]=!this.showDiv[i];
    return this.showDiv[i];
    
  }

  logout(){
    this.cookSer.set('logcorr', 'false');
    this._router.navigateByUrl('/dash');
    // this.d = this.cookSer.get('logcorr');
    
  }

}
