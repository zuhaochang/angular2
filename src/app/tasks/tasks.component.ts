import { Component, OnInit } from '@angular/core';
import { TaskListComponent } from '../task-list';
import { BaseComponent } from '../base-component';
import { TaskService } from '../task.service';

@Component({
  moduleId: module.id,
  selector: 'app-tasks',
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.css'],
  directives:[TaskListComponent]

})
export class TasksComponent extends BaseComponent {
  private title: any = { content: "testforchange" };
  private task;

  constructor(private taskService: TaskService = null) {
    super();
    this.task = {title:"",completed: false};
  }

  onSubmit(){
    this.task.title = this.title.content;//輸入的content給到taskservice建構子task裡的title名稱
    this.taskService.addTask(this.task);//呼叫service裡的add method
    //this.task={title:"",completed: false};
  }

  OnDelete() {
    this.taskService.tasks.splice(0,1);
  }
}
