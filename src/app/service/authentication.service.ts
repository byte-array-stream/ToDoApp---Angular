import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate{

  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    return this.isUserLoggedIn();
  }

  authenticateUser(userName:string, password:string){
    if(userName == "RAVI" && password == "RAVI"){
      sessionStorage.setItem("loggedInUser", userName);
      return true;
    }
    return false;
  }

  handleLogOut(){
    if(this.isUserLoggedIn){
      sessionStorage.clear();
    }
  }

  isUserLoggedIn(){
    if(sessionStorage.getItem("loggedInUser") != null){
      return true;
    }
    return false;
  }

}
