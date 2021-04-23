import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomMessageService } from '../restapi/custommessage.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  loggedInUserName:string;
  customWelcomeMessage:string;
  
  constructor(private activatesRoute:ActivatedRoute, private apiService:CustomMessageService) { }
  
  ngOnInit(): void {
    this.loggedInUserName = this.activatesRoute.snapshot.paramMap.get("name");
  }

  getCustomWelcomeMessage(){
    this.customWelcomeMessage = this.apiService.getCustomMessage();
  }

  getCustomMessageForUser(){
    this.customWelcomeMessage = this.apiService.getCustomMessageForUser("Ravi");
  }

}
