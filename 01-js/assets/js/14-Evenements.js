/*-------------------------------------------------
                LES EVENEMENTS


Les évènements vont me permettre de déclencher
une fonction, c'est à dire, une série d'instruction,
suite à une action de mon utilisateur

Objectif : Etre en mesure de capturer ces évènements
afin d'exécuter une fonction.

Les Evènements : mouse (souris)
    click       : au clic sur élément
    mouseenter  : la souris passe au dessus de l'élément
    mouseleave  : la souris sort de l'élément
    mouseover   : au passage de la souris

cf : https://developper.mozilla.org//fr/docs/Web/API/Document/MouseEvent


    Les évènements Keyboard (clavier)

    keyup   : une touche du clavier est relachée
    keydown  : une touche du clavier est enfoncée

cf : https://developper.mozilla.org//fr/docs/Web/API/Document/KeyboardEvent


    Les évènements : Windows (fenêtre)

    scroll   : déffilement de la fenêtre
    resize   : redimentionnement de la fenêtre

-----------------------------------------------------

Les évènement FORM (formulaire)

    changez       :pour les élément <input>, <select> et <textarea>.
    submit        :à l'envoi (soumission) du formulaire.
    input         :pour capter la saisie d'un utilisateur sur un champ <input>.



################ LES ECOUTEURS D'EVENEMENTS ####################

pour attacher un évènement à un élément, ou autrement dit,
pour déclencher un écouteur d'évènement, qui se chargera de
déclencher une fonction, je vais utiliser la syntaxe suivante
---------------------------------------------------*/

// var p = document.getElementById('monparagraphe');

// function changerLaCouleurEnRouge(){
//     p.style.color = "red";
// }
// p.addEventListener('mouseover', changerLaCouleurEnRouge);


/*------------------------------------------------------------------
avec javascript, créez un champ "input" type text avec un ID unique. 
Affichez ensuite dans l'alerte, la saisie de l'utilisateur
------------------------------------------------------------------ */


// var input = document.createElement('moninput');
// input.id = "alerteCouleur";
// input.style = "text";

// function getElementByClassName(alerteCouleur) {
//     input(alert("mon login"))
// }

// function changerLaCouleurEnRouge() {
//     input.style.color = "red";
// }

// input.addEventListener('mouseover', changerLaCouleurEnRouge);

// var input = document.createElement('input');
// input.type = "text";
// input.id = "monId";
// input.setAttribute("placeholder", "Saisissez le contenu...");


// document.body.appendChild(input);

// function getUserInput(){
//     alert(input.value);
// }

// input.addEventListener('change', getUserInput);

var p = document.getElementById('monParagraphe');

function changerLaCouleurEnRouge() {
    p.style.color = "red";
}

p.addEventListener('mouseover', changerLaCouleurEnRouge);

/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/

// -- Création du champ input
var input = document.createElement('input');
input.type = "text";
input.id = "monID";
input.setAttribute("placeholder", "Saisissez un contenu...");

// -- Ajout dans la page
document.body.appendChild(input);

/**
 * On écoute l'évènement "change" sur le champ "input"
 * et on execute la fonction "displayUserInput"
 */
function displayUserInput() {
    alert(input.value);
}

input.addEventListener('change', displayUserInput);