import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoanformComponent } from '../loanform/loanform.component';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})

export class LoansComponent implements OnInit {
  constructor(private cookSer:CookieService, private _router:Router) { 
    
  }

  f1 = this.cookSer.get('logcorr');

  no_val() {
    this._router.navigateByUrl('/clog');
    // return 1;
  }

  ngOnInit(): void {}  

} 
