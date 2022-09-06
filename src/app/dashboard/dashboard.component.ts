import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  taskObj : Task = new Task(); //create task object
  taskArr : Task[]=[]; //values array form il taskArril store aavum
  addTaskValue : string='' //input boxil ninnum varunath ee variableil store aavum
  editTaskValue : string=''  //update chyumpol ulla values ithiil store aavum

  constructor(private service:CrudService) { }

  ngOnInit(): void {

    //variables initializing
    this.addTaskValue=''
    this.editTaskValue=''
    this.taskObj=new Task()
    this.taskArr=[]
    this.getAllTask()
  }
  getAllTask() {
    this.service.getAllTask().subscribe(res=>{
      this.taskArr=res
    })
  }

  AddBtn(){
    this.taskObj.task_name=this.addTaskValue
    this.service.addTask(this.taskObj).subscribe(res=>{
      this.ngOnInit()
      this.addTaskValue=''
    });
}

deleteBtn(todoTask:Task){
  this.service.deleteTask(todoTask).subscribe(res=>{
    this.ngOnInit()
  })      
}

editBtn(){
  this.taskObj.task_name=this.editTaskValue
  this.service.editTask(this.taskObj).subscribe(res=>{
    this.ngOnInit()
  })
}


//this functiion will pass the value of input to modal box to edit
callEdit(todoTask:Task){
  this.taskObj=todoTask
this.editTaskValue=todoTask.task_name
}
}
