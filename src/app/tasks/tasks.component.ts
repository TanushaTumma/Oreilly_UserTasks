import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { User } from '../user/user.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task.model';
import { TaskService } from './task.service';


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask =false;

  constructor(private taskService: TaskService) {}  

  get selectedUserTasks() {
    return this.taskService.getTask(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseTask() {
    this.isAddingTask = false;
  }

  

}
