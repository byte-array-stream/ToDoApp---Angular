import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomMessageService } from '../restapi/custommessage.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  loggedInUserName:string;
  customWelcomeMessage:any;
  
  constructor(private activatesRoute:ActivatedRoute, private apiService:CustomMessageService,
    private router:Router) { }
  
  ngOnInit(): void {
    this.loggedInUserName = this.activatesRoute.snapshot.paramMap.get("name");
  }

  getCustomWelcomeMessage(){
    this.apiService.getCustomMessage().toPromise().then(
      
      successResponse => {
        if(successResponse){
          
          this.customWelcomeMessage = successResponse;
          
          
          // [{
          //   "id": 2,
          //   "email": "janet.weaver@reqres.in",
          //   "first_name": "Janet",
          //   "last_name": "Weaver",
          //   "avatar": "https://reqres.in/img/faces/2-image.jpg"
          //   }] // Arrow function taking successResponse as parameter
        }
      }
    );
    
  };
  

  getCustomMessageForUser(){
    this.customWelcomeMessage = this.apiService.getCustomMessageForUser("Ravi");
  }

  public updateTask(navigateId:string, taskId:string){
    this.router.navigate([navigateId,taskId]);
  }

}
