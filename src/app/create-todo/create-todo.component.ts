import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoBean } from '../beans/ToDoBean';
import { TodotaskService } from '../restapi/todotask.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  constructor(private apiService:TodotaskService, 
              private router:Router) { }
  todoTask:ToDoBean;

  ngOnInit(): void {
    this.todoTask.createdTs = new Date();
  }

  createTask(){
    this.apiService.createTask("RAVI", this.todoTask).subscribe();
    this.router.navigate(['create-task']);
  }
}
