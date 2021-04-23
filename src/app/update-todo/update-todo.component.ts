import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoBean } from '../beans/ToDoBean';
import { TodotaskService } from '../restapi/todotask.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  updateMessage:string;
  todoTask:ToDoBean;

  constructor(private apiService:TodotaskService, private activatedRouter:ActivatedRoute,
      private router:Router) { }

  ngOnInit(): void {

    let taskId:string;
    this.todoTask = new ToDoBean();
    taskId = this.activatedRouter.snapshot.paramMap.get("taskId");
    this.apiService.fetchTaskById("RAVI", taskId).subscribe(
      successResp => {
        this.todoTask = successResp;
      },
      errorResp => {
        this.updateMessage = errorResp.error.error.message;
      }
      )
  }

  updateToDoTask(){
    this.apiService.updateTodoTask('RAVI', this.todoTask.taskId, this.todoTask).subscribe(
      successResp => {
        this.router.navigate(["todo"]);
      },
      errorResp => {
        this.updateMessage = errorResp.error.error.message;
      }
    );
  }
}
