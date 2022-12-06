import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LogInService } from '../log-in.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor( private _router: Router, private cookSer:CookieService) { }

  ngOnInit(): void {
  }



  // log_corr = false;
  // flag = this.logc.log_corr;

  f1 = this.cookSer.get('logcorr');

  no_val() {
    this._router.navigateByUrl('/clog');
    // return 1;
  }

  // disp = this.logc.getLog();

  setC(){
    this.f1 = this.cookSer.get('logcorr');
  }


}
