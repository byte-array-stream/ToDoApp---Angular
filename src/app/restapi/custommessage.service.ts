import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomMessageBean} from '../beans/CustomMessageBean';

@Injectable({
  providedIn: 'root'
})
export class CustomMessageService {

  public customMessage:string;

  constructor(private httpClient:HttpClient) { }

  getCustomMessage(){

    // By default Angular returns JSON as response. But my Spring Rest is returning a string value. so angular will try to parse it.
    // and it will fail. To avoid that we have to send responseType as Text. so that it will not parse the JSON data and it will pring 
    // exact same string value.
    /*
      Subscribe takes three params. 1. FOr success response. 2. For error response 3. After successful completion. this method doesn't take parameters.
    */
    return this.httpClient.get("https://reqres.in/api/users?delay=3", {responseType: 'json'});
  }

  // Similar to above, only difference ti method with send path param as well. Use "TICK ``" for path params.
  getCustomMessageForUser(userName:string){
    this.httpClient.get<CustomMessageBean>(`http://localhost:8080/custom-message/${userName}`, {responseType: 'json'}).subscribe(
      successResponse => this.handleSuccessResponseForUser(successResponse), // Arrow function taking successResponse as parameter
      errorResponse => this.handleErrorResponse(errorResponse),
      () => console.log("COmpleted") // Arrow function with no parameter
    );
    return this.customMessage;
  }

  // Since we sending response into a bean. so data will come in json in key and value form
  private handleSuccessResponseForUser(successResp){
    console.log(successResp);
    this.customMessage = successResp.customMessage;
  }

  private handleSuccessResponse(successResp){
    console.log(successResp.data);
    this.customMessage = successResp.data[0].email;
  }

  private handleErrorResponse(errorResp){
    this.customMessage = errorResp.error.erroe.message;
    
  }
}
