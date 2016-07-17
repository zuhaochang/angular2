import { Component, OnInit} from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  moduleId: module.id,
  selector: 'app-task-list',
  templateUrl: 'task-list.component.html',
  styleUrls: ['task-list.component.css']

})
export class TaskListComponent implements OnInit{

  constructor(public taskService: TaskService = null) {}

  ngOnInit() {
  }

  completeTask(task){
    task.completed = true;
  }
}

