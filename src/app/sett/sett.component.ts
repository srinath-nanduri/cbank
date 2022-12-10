import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sett',
  templateUrl: './sett.component.html',
  styleUrls: ['./sett.component.css']
})
export class SettComponent implements OnInit {

  constructor(private cookSer:CookieService, private _router: Router) { }

  ngOnInit(): void {
  }

  d = '';
  showDiv=true
  toggleDisplay(){
    this.showDiv=!this.showDiv;
  }

  logout(){
    this.cookSer.set('logcorr', 'false');
    this._router.navigateByUrl('/dash');
    // this.d = this.cookSer.get('logcorr');
    
  }

}
