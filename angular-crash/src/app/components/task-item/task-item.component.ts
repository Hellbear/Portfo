import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input()
  task!: Task;
  faTrash = faTrash;

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  constructor() { }

  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  ngOnInit(): void {
  }
  
  onDelete(task: any){
    console.log(task);
    this.onDeleteTask.emit(task);
  }

  onToggle(task:any){
    console.log("toggled");
    this.onToggleReminder.emit(task);
  }
}
