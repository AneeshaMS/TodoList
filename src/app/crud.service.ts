import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Task} from './model/task';

const headers = { "content-type": "application/json" };


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  serviceURL : string

  constructor(private http:HttpClient) {
    this.serviceURL='http://localhost:3000/tasks'
   }

//Task enullath model aanu
   addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.serviceURL,task,{ headers: headers })
   }

   //Array ayitanu objects kittunath

   getAllTask():Observable<Task[]>{
    return this.http.get<Task[]>(`${this.serviceURL}`)
   }

   editTask(task:Task) : Observable<Task>{
    return this.http.put<Task>(this.serviceURL+`/${task.id}`,task, { headers: headers })
   }

   deleteTask(task:Task) : Observable<Task>{
    return this.http.delete<Task>(this.serviceURL+`/${task.id}`, { headers: headers })
   }
}
