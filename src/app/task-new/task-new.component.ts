import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { BaseComponent } from '../base-component';

@Component({
  moduleId: module.id,
  selector: 'app-task-new',
  templateUrl: 'task-new.component.html',
  styleUrls: ['task-new.component.css'],
})

export class TaskNewComponent extends BaseComponent {
  task;
  @Input() keyword: any;

  constructor(public taskService:TaskService = null) {
    super();
    console.log('hello world');
    this.task = {title:"",completed: false};
  }

  onSubmit(){
    this.task.title = this.keyword;
    this.taskService.addTask(this.task);
    this.task={title:"",completed: false};
  }
  
  ngOnInit() {
    super.ngOnInit();
  }

  ngOnChanges(changes: { [propertyName: string]: any }) {
    super.ngOnChanges(changes);
  }
}