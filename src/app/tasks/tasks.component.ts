import { Component, OnInit } from '@angular/core';
import { TaskListComponent } from '../task-list';
import { TaskNewComponent } from '../task-new';
import { BaseComponent } from '../base-component';
import { TaskService } from '../task.service';

@Component({
  moduleId: module.id,
  selector: 'app-tasks',
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.css'],
  directives:[TaskListComponent,TaskNewComponent]

})
export class TasksComponent extends BaseComponent {
  private title: any = { content: "Hello World" };
  private task;

  constructor(private taskService: TaskService = null) {
    super();
    this.task = {title:"",completed: false};
  }

  onSubmit(){
    this.task.title = this.title.content;
    this.taskService.addTask(this.task);
    this.task={title:"",completed: false};
  }

  OnDelete() {
    this.taskService.tasks.splice(0,1);
  }
}
