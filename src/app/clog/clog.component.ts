import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientService } from '../http-client.service';

@Component({
  selector: 'app-clog',
  templateUrl: './clog.component.html',
  styleUrls: ['./clog.component.css']
})
export class ClogComponent implements OnInit {

  cust = ["Srinath", "Gunji", "Akank", "Sreeja", "Dha"]

  auth: { [key: string]: string } = {
    "Srinath" : "content",
    "Gunji" : "topgonly",
    "Akank" : "barfi",
    "Sreeja" : "nandi",
    "Dhairya" : "Meh"
  }

  lc:boolean;
  // displog:string='false';
  vals:String[]=[];



  // submitted  =false;
  // onSubmit(){ this.submitted = true;}


  constructor(private _router: Router, private cookSer: CookieService, private httpClientService:HttpClientService) { 
    this.lc=false;
    // this.displog = this.cookSer.get('logcorr');
  }

  

  ngOnInit(): void {

    // this.cookSer.set('logcorr', 'false');

  }






  // val(){
  //   this._router.navigateByUrl('/dash');
  // }







  // submit(form: NgForm){

  //   let u = form.value.user;

  //   if(this.cust.includes(u)){
  //     if(form.value.pwd==this.auth[u]){

  //       this._router.navigateByUrl('/dash'); // redirect user to dashboard using ts. 

  //       this.cookSer.set('logcorr','true');
  //       console.log(this.cookSer.get('logcorr'));
  //       this.displog = this.cookSer.get('logcorr');


  //     }
  //     else{
  //       this.lc = true;

  //       this.cookSer.set('logcorr','false');
  //       this.displog = this.cookSer.get('logcorr');

  //     }      
  //   }
  //   else{
  //     this.lc = true;
  //     this.cookSer.set('logcorr','false');
  //     this.displog = this.cookSer.get('logcorr');
  //   }
  // }

  submit(form: NgForm){

    let email = form.value.user;
    let pass = form.value.pwd;

    this.httpClientService.valUser(email, pass).subscribe(
      response =>{this.vals=response;},
     );

    if(this.vals[2]=="true"){
      let d:String = this.vals[0];
      this.cookSer.set('logcorr','true');
      let t = <string>d;
      this.cookSer.set('user',t);
      this.cookSer.set('email',email);
      this.cookSer.set('userid',<string>this.vals[1]);
      this._router.navigateByUrl('/dash');
      this.lc=false;
    }

    else if(this.vals[2]=="false"){
      this.lc=true;
    }
    




  }


}
