import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor( private _router: Router, private cookSer:CookieService) { }



  // log_corr = false;
  // flag = this.logc.log_corr;

  f1 = this.cookSer.get('logcorr');

  no_val() {
    this._router.navigateByUrl('/clog');
    // return 1;
  }

  reloadCurrentPage() {
    window.location.reload();
   }

  // disp = this.logc.getLog();

  setC(){
    this.f1 = this.cookSer.get('logcorr');
  }


  user!:string;



  ngOnInit(): void {
    // this.reloadCurrentPage();
    this.user = this.cookSer.get("user");

  }


}
