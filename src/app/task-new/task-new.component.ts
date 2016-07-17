import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  moduleId: module.id,
  selector: 'app-task-new',
  templateUrl: 'task-new.component.html',
  styleUrls: ['task-new.component.css'],
})
export class TaskNewComponent implements OnInit {
  task;

  constructor(public taskService:TaskService = null) {
    this.task = {title:"",completed: false};
  }

  onSubmit(){
    this.taskService.addTask(this.task);
    this.task={title:"",completed: false};
  }

  ngOnInit() {

  }

}
