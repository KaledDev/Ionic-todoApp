import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  tasks: { id: number, title: string, completed: boolean }[] = [];
  newTask = '';
  constructor() { }

  //Ajouter une tache
  addTask() {
    if (this.newTask.trim().length > 0) {
      const newTask = {
        id : Date.now(),
        title : this.newTask,
        completed : false
      };
      this.tasks.push(newTask);
      this.newTask = '';
    }
  }

  //Supprimer une tache
    deleteTask(taskId: number) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

  // Marquer une tâche comme terminée
  toggleTaskCompletion(taskId: number) {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }

  ngOnInit() {
  }

}
