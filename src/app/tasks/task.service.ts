import { Injectable } from "@angular/core";
import { NewTaskData } from "./task.model";

@Injectable({providedIn: 'root'})
export class TaskService {
  private  tasks = [
        {
          "id": "t1",
          "userId": "u1",
          "title": "Master Angular",
          "summary": "Learn all the basic and advanced features of Angular & how to apply them.",
          "dueDate": "2025-12-31"
        },
        {
          "id": "t2",
          "userId": "u1",
          "title": "Build first prototype",
          "summary": "Build a first prototype of the online shop website",
          "dueDate": "2024-05-31"
        },
        {
          "id": "t3",
          "userId": "u2",
          "title": "Prepare issue template",
          "summary": "Prepare and describe an issue template which will help with project management",
          "dueDate": "2024-06-15"
        },
        {
          "id": "t4",
          "userId": "u3",
          "title": "Master Angular",
          "summary": "Learn all the basic and advanced features of Angular & how to apply them.",
          "dueDate": "2025-12-31"
        },
        {
          "id": "t5",
          "userId": "u3",
          "title": "Master Angular",
          "summary": "Learn all the basic and advanced features of Angular & how to apply them.",
          "dueDate": "2025-12-31"
        },
      ]
  
  constructor() {
    const tasks = localStorage.getItem('tasks');

    if(tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  
  getTask(userId: string) {
    return this.tasks.filter((task) => task.userId === userId );  
  }

  addTask(newTask: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getDate.toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date
    });          
    this.saveTasks(); 
  }  
  
  removeTask(id: string) {
    this.tasks =this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }
  
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  
    
}