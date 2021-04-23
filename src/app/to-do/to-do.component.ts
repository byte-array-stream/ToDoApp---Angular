import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoBean } from '../beans/ToDoBean';
import { TodotaskService } from '../restapi/todotask.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  todoListItems:ToDoBean[];
  errorMessage:string;

  constructor(private apiService : TodotaskService,
              private router:Router) { 
    //this.todoListItems = this.apiService.fetchTaskList("RAVI");
    this.refreshToDoList("RAVI");
  }

  ngOnInit(): void {
    // I have hardcoded earlier, now we'll fetch by ReST call
    /*this.todoListItems = [
      new ToDoBean("111","Learn Dancing", new Date(), false),
      new ToDoBean("111","Learn Singing", new Date(), false),
      new ToDoBean("111","Learn Programming", new Date(), false),
      new ToDoBean("111","Learn History", new Date(), false),
    ] */
   
  }

  private refreshToDoList(userName:string){
      this.apiService.fetchTaskList(userName).subscribe(
        successResp =>{
          this.todoListItems =  successResp;
        },
        errorResp => {
          this.errorMessage = errorResp.error.error.message;
        }
      );
  }

  public deleteTask(taskId:string){
    this.apiService.deleteTaskForUser("RAVI", taskId).subscribe(
      successResp => {
        this.refreshToDoList("RAVI");
        this.errorMessage = "ToDo task deleted successfully !!"
      },
      errorResp => {
        this.errorMessage = errorResp.error.error.message;
      }  
    );
  }

  public updateTask(navigateId:string, taskId:string){
    this.router.navigate([navigateId, taskId]);
  }
}
