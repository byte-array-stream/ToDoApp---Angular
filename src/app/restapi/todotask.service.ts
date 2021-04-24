import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoBean } from '../beans/ToDoBean';

@Injectable({
  providedIn: 'root'
})
export class TodotaskService {

  constructor(private httpClient : HttpClient) { }

  // Do not call subscribe method here. Becuase it will not load data on page properly. Try to subscribe the service in component class itself.
  fetchTaskList(userName:string){
    return this.httpClient.get<ToDoBean[]>(`http://localhost:8080/task-list/${userName}`);
  }

  deleteTaskForUser(userName:string, taskId:string){
    return this.httpClient.delete(`http://localhost:8080/delete-task/${userName}/${taskId}`);
  }

  fetchTaskById(userName:string, taskId:string,){
    return this.httpClient.get<ToDoBean>(`http://localhost:8080/get-task/${userName}/${taskId}`);
  }

  updateTodoTask(userName:string, taskId:string, todoTask:ToDoBean){
    return this.httpClient.put<ToDoBean>(`http://localhost:8080/update-task/${userName}/${taskId}`, todoTask);
  }

  createTask(userName:string, todoTask:ToDoBean){
    return this.httpClient.post<ToDoBean>(`http://localhost:8080/create-task/${userName}`,todoTask);
  }

  fetchUserkById(userId:string,){
    return this.httpClient.get(`https://reqres.in/api/users/${userId}`);
  }

}
