import { Component, OnInit } from '@angular/core';
import { TaskListComponent } from '../task-list';
import { TaskNewComponent } from '../task-new';
@Component({
  moduleId: module.id,
  selector: 'app-tasks',
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.css'],
  directives:[TaskListComponent,TaskNewComponent]

})
export class TasksComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
