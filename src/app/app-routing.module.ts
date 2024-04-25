import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './componentes/task-list/task-list.component';
import { TaskFormComponent } from './componentes/task-form/task-form.component';

const routes: Routes = [
  {path: 'listPage', component: TaskListComponent },
  {path: 'formPage', component: TaskFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
