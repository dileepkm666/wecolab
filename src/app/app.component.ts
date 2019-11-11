import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../assets/css/agency.min.css']
})
export class AppComponent {
  title = 'wecolab';
 constructor(private router:Router){}
 navbarOpen=false;
 navBarCollapse()
  {
    this.navbarOpen=false;
    console.log(this.navbarOpen+"khjkfwj");
  }
  toggleNavBar()
  {
    this.navbarOpen=!this.navbarOpen;
  }
}
