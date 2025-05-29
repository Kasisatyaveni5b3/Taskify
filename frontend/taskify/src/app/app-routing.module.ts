import { TasksComponent } from './../components/tasks/tasks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from 'src/components/angular/angular.component';
import { ExpressComponent } from 'src/components/express/express.component';
import { JavaComponent } from 'src/components/java/java.component';
import { JavascriptComponent } from 'src/components/javascript/javascript.component';
import { LoginComponent } from 'src/components/login/login.component';
import { MongodbComponent } from 'src/components/mongodb/mongodb.component';
import { NavComponent } from 'src/components/nav/nav.component';
import { NodeComponent } from 'src/components/node/node.component';
import { PostgresqlComponent } from 'src/components/postgresql/postgresql.component';
import { PractiseComponent } from 'src/components/practise/practise.component';
import { ReactComponent } from 'src/components/react/react.component';
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
  {
    path: 'javascript',
    component: JavascriptComponent,
  },
  {
    path: 'angular',
    component: AngularComponent,
  },
  {
    path: 'reactjs',
    component: ReactComponent,
  },
  {
    path: 'nodejs',
    component: NodeComponent,
  },
  {
    path: 'express',
    component: ExpressComponent,
  },
  {
    path: 'mongodb',
    component: MongodbComponent,
  },
  {
    path: 'postgresql',
    component: PostgresqlComponent,
  },
  {
    path: 'java',
    component: JavaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
