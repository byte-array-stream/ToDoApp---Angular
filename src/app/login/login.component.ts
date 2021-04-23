import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string;
  password:string;
  errorMessage:string;
  isValid:boolean = true;

  constructor(private authService:AuthenticationService, private router:Router){}

  ngOnInit(): void {
    
  }
  
  handleSubmit(){
    if(this.authService.authenticateUser(this.userName, this.password)){  
      this.router.navigate(["welcome", this.userName]);
    } else {
      this.errorMessage = "Invalid Username/Password !!";
      this.isValid = false;
    }
  }

}  

