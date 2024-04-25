import { Component } from '@angular/core';
import { TaskModel, Todos } from '../../models/TaskModel';
import { TaskService } from '../../servicios/task/task.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  taskList: Todos[];
  todosLength: number = 0;
  //pageSizeOptions = [5, 10, 25];
  pageIndex: number = 0;
  showFirstLastButtons: boolean = true;
  constructor(
    private readonly taskService: TaskService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.getTaskPage(0);
  }

  handlePageEvent(event: PageEvent): void {
    this.todosLength = event.length;
    this.pageIndex = event.pageIndex;
    this.getTaskPage(event.pageIndex);
  }

  getTaskPage(pageIndex: number): void {
    this.taskService.getTaskPage(pageIndex)
    .subscribe((list: TaskModel) => {
      console.log("list ", list)
      this.taskList = list.todos;
      this.todosLength = list.total
    })
  }

  completeTask(todo: Todos): void {
    todo.completed = true
    this.taskService.completeTask(todo)
    .subscribe();
  }

}
