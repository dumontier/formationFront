import { Component } from '@angular/core';
import {Task} from './shared/models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // -- Notre tableau de tâches
  tasks: Task[] = [
    {
      id: 1,
      name: 'Faire la vaisselle',
      status: false
    },
    {
      id: 2,
      name: 'Sortir les poubelles',
      status: false
    },
    {
      id: 3,
      name: 'Sortir au cinéma',
      status: true
    },
    {
      id: 4,
      name: 'Réparer le PC',
      status: false
    },
  ];
  /*
  * L'utilisateur viens de
  * terminer une tâche.
  * @param {Task} task
  */
  taskIsDone(task: Task) {
    task.status = true;
  }
  /*
  * Lorsque l'utilisateur crée une tâche
  * dans "add-task", celle-ci est récupérer
  * par "app-component" puis ajouté dans le tableau des tâches
  */
  newTask(taskFormEvent: Task) {
    console.log(taskFormEvent);
    this.tasks.push(taskFormEvent);
  }
/*
* L'utilisateur viens de supprimer
* une tâche. on la retire du tableau.
* @param task
*/
  removeTask(task: Task) {
    // delete task.status;
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
}
