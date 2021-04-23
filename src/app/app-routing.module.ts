import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './service/authentication.service';
import { ToDoComponent } from './to-do/to-do.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path:"", component:LoginComponent },
  { path:"login", component:LoginComponent },
  { path:"welcome/:name",component:WelcomeComponent, canActivate:[AuthenticationService]},
  { path:"update/:taskId", component:UpdateTodoComponent, canActivate:[AuthenticationService]},
  { path:"create-task/:taskId", component:CreateTodoComponent},
  { path:"error", component:ErrorComponent },
  { path:"todo", component:ToDoComponent, canActivate:[AuthenticationService]},
  { path:"**", component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
