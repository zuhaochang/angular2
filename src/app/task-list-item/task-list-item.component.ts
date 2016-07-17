import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base-component';
import { TaskService } from '../task.service';

@Component({
  moduleId: module.id,
  selector: 'app-task-list-item',
  templateUrl: 'task-list-item.component.html',
  styleUrls: ['task-list-item.component.css']
})
export class TaskListItemComponent extends BaseComponent {
  @Input() task;

  constructor(private taskService: TaskService = null) {
    super();
  }

  ngOnInit() {
  }

  completeTask(task){
    task.completed = true;
  }
}
