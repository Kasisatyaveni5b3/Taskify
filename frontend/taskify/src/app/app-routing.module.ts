import { TasksComponent } from './../components/tasks/tasks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from 'src/components/nav/nav.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/admin/units',
  pathMatch: 'full'
}, {
  path: 'tasks',
  component:TasksComponent
 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
