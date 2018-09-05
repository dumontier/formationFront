
/*
* Pour déclarer une classe comme composant de
* notre application, on importe "Component" via
* @angular/core
*/
import { Component } from '@angular/core';

class contact {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: object;
  phone?: number;
  website?: string;
  company?: object;
}
/*
* @Component est ce qu'on appel un décorateur.
* il va nous permettre de définir 3 paramètres
* essentiels à notre applcation..
*/
@Component({
  /*
  * Le sélecteur (selector) détermine la
  * manière dont le composant sera affiché
  * dans notre HTML : <app-root></app-root>;
  * Vous devez OBLIGATOIREMENT avoir la balise
  * d'ouverture et de fermeture.
  */
  selector: 'app-root',
  /**
  * "templateUrl" ou "template" est la
  *partie visible du composant. C'est
  * ce qui s'affiche à l'écran lorsque
  * le composant est utilisé.
  */
  templateUrl: './app.component.html',
 // template: `
 // <h1>1er pas angular</h1>//`,

  styleUrls: ['./app.component.css']
  // styles: [`
  // h1 { color: dodgerblue; }
  // `]
})
/*
* La classe contient les données du composant,
* mais aussi, son comportement (ce qu'il fait).
*/
export class AppComponent {

  // Déclaration d'une Variable
  title = 'Gestion de contacts';

  // Contact Actif;
  contactActif: Contact;

  //--Déclaration d'un objet
  unContact: Contact = {
    id: 1,
    name: 'Hugo Liegeard',
    username: 'hugo liegeard',
    email: 'hugo.liegeard@lepoles.com'
  };
  mesContacts: Contact[] = [{
    id: 1,
    name: 'Hugo Liegeard',
    username: 'hugo liegeard',
    email: 'hugo.liegeard@lepoles.com'
    },
    {
      id: 2,
      name: 'Luc Joinvil',
      username: 'luc joinvil',
      email: 'luc.joinvil@lepoles.com'
    },
    {
      id: 3,
      name: 'Alpha Diallo',
      username: 'alpha diallo',
      email: 'alpha.diallo@lepoles.com'
    },
      {
        id: 4,
        name: 'Layla Lahcene',
        username: 'layla lahcene',
        email: 'layla.lahcene@lepoles.com'
      },
  ];

showContact(contact: {  contactCliqueParMonUtilisateur: Contact }) {

  this.contactActif = contactCliqueParMonUtilisateur;

},
}
