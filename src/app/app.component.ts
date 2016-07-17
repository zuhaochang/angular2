import { Component,OnInit } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { TasksComponent } from './tasks';
import { TaskService } from './task.service';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[TasksComponent],
  providers:[TaskService]
})
export class AppComponent implements OnInit{
title = 'app works!';
  constructor(){

  }
  ngOnInit(){

  }



}