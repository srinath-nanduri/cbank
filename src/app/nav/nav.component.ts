import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user!:string;

  constructor(private cookSer: CookieService) {
   }



  setUser(): void{

  }

  ngOnInit(): void {
    this.user = this.cookSer.get("user");
  }

}
