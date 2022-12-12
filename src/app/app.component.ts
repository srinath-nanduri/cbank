import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngBank';

  constructor(private cookSer:CookieService){
    // this.cookSer.set('logcorr', 'false');
    // this.cookSer.set('user', 'User');
  }

  ngOnInit(): void{
    // this.cookSer.set('logcorr', 'false');
    // this.cookSer.set('user', 'User');
  }
}