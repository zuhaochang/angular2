import { Component, OnInit, Input} from '@angular/core';
import { TaskService } from '../task.service';
import { BaseComponent } from '../base-component';
import { TaskListItemComponent } from '../task-list-item';

@Component({
  moduleId: module.id,
  selector: 'app-task-list',
  templateUrl: 'task-list.component.html',
  styleUrls: ['task-list.component.css'],
  directives: [TaskListItemComponent]
})

export class TaskListComponent extends BaseComponent{
  @Input() keyword: any;

  constructor(public taskService: TaskService = null) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  completeTask(task){
    task.completed = true;
  }
}

