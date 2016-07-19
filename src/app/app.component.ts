import { Component,OnInit } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { TasksComponent } from './tasks';//引入tasks component
import { TaskService } from './task.service'; //引入task service
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[TasksComponent], //tasks component
  providers:[TaskService]  //taskservice
})
export class AppComponent implements OnInit{
title = 'app works!';
  constructor(){

  }
  ngOnInit(){

  }



}
