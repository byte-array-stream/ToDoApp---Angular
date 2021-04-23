import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit {
  title = 'MyFirstAngularApp';
  loggedInUserName:string;

  constructor(private router:Router, public authService:AuthenticationService){
    this.loggedInUserName = sessionStorage.getItem("loggedInUser");
    console.log("User => "+this.loggedInUserName);
  }
  ngOnInit(): void {
    
  }

  logout(){
    this.authService.handleLogOut();
    this.router.navigate(["login"]);
  }

}

