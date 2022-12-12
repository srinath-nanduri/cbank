import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cust-ser',
  templateUrl: './cust-ser.component.html',
  styleUrls: ['./cust-ser.component.css']
})
export class CustSerComponent implements OnInit {

  constructor(private _router:Router, private cookSer:CookieService) { }

  ngOnInit(): void {
  }

  f1 = this.cookSer.get('logcorr');

  no_val() {
    this._router.navigateByUrl('/clog');
    // return 1;
  }

}
