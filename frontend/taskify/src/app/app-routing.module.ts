import { TasksComponent } from './../components/tasks/tasks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/components/login/login.component';
import { NavComponent } from 'src/components/nav/nav.component';
import { PractiseComponent } from 'src/components/practise/practise.component';
import { RegisterComponent } from 'src/components/register/register.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: RegisterComponent,
  },
  {
    path: 'practise',
    component: PractiseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
