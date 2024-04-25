import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskModel, Todos } from '../../models/TaskModel';
import { Observable } from 'rxjs';
import { URL_TASK } from '../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL = URL_TASK

  constructor(
    private readonly http: HttpClient
  ) { }

  getTaskPage(pageIndex: number): Observable<TaskModel>{
    return this.http.get<TaskModel>(URL_TASK+'todos?limit='+5+"&skip="+pageIndex);
  }

  completeTask(body: Todos): Observable<any>{
    let headers = new HttpHeaders()
    .set('Content-Type','application/json')
    return this.http.put<any>(URL_TASK+'todos/'+body.id, JSON.stringify({completed: true}), {'headers': headers})
  }

  saveTask(task: Todos){
    let headers = new HttpHeaders()
    .set('Content-Type','application/json')
    return this.http.post<any>(URL_TASK+'todos/add', JSON.stringify({
      todo: task.todo,
      completed: task.completed,
      userId: parseInt(task.userId)
    }), {'headers': headers});

  }
}
