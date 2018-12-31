import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Task } from './task';


@Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.css'],
  providers: [MyserviceService]
})
export class MytableComponent implements OnInit {

  name: string = "";
  task_list: Array<Task> = new Array();
  id: number = 1;

  constructor() { 
  }

  addTask() {
    if(this.name != "") {
      let task: Task = new Task(this.id, this.name);
      this.task_list.push(task);
      this.name = "";
      this.id++;
    } else {
      alert("please enter the task name");
    }
  }

  removeTask(id) {
    let index: number = 0;
    for (let i=0; i < this.task_list.length; i++) {
      if (this.task_list[i].id === id) {
        index = i;
      }
    }
    if (index !== -1) {
        this.task_list.splice(index, 1);
    }  
  }
  
  changeStatus(id) {
    let index: number = 0;
    for (let i=0; i < this.task_list.length; i++) {
      if (this.task_list[i].id === id) {
        this.task_list[i].status = !this.task_list[i].status;
      }
    }
  }

  ngOnInit() {
  }

}
