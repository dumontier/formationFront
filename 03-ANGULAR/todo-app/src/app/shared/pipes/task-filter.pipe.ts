import { Pipe, PipeTransform } from '@angular/core';
import { Task} from '../models/task';
@Pipe({
  name: 'taskFilter',
  // option "pure" sur les filtres du pipe permet
  // de rendre les données initiales
  pure: false
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks: Task[], status: boolean): Task[] {

    const filteredTasks: Task[] = [];
  //  Je retourne un tableau de tâches filtré
  //  par rapport au "status".
    for(let i = tasks.length; i--;){
      //  Vérification dans la console
      // console.log(tasks[i]);
      /*
      * Je vérifie si le "status" de l'une de mes tâches (tasks[i])
      * correspond au "status" que je recherche.
      */
      if( tasks[i].status === status ){
        filteredTasks.push(tasks[i]);
      }
    }
    return filteredTasks;
  }

}
