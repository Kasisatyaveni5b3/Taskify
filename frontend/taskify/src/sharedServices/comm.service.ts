import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommService {
  baseUrl= 'http://localhost:5000'
  constructor(private http: HttpClient) { }
  
  createTask(): Observable<any> {
     return this.http.get(`${this.baseUrl}/api/tasks`)
  }

  countStatus(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/tasks/status-count`);
  }

  getTaskName(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/tasks/tasks-name`);
  }
  getTasksByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/tasks/filter-by-name?name=${name}`);
  }

  filterTasks(taskName: string, searchText: string): Observable<any[]> {
    let params:any = {};
    
    if (taskName) params['taskName'] = taskName;
    if (searchText) params['searchText'] = searchText;
  
    return this.http.get<any[]>('http://localhost:5000/api/tasks/filter', { params });
  }
}
