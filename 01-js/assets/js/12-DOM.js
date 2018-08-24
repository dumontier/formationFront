/*------------------------------
        LE DOM
--------------------------------*/
// le DOM est une interface de développement en JS pour HTML
// Grace au DOM, je vais être en mesure d'accéder / modifier 
// mon code HTML.
// L'objet "document" : c'est le point d'entrée vers mon contenu.

// Chaque page chargée dans mon  navigateur à un objet "document"

/*
*Comment puis je faire pour recupérer
*les infos de ma page HTML ?
*/

/*-----------------------------------
        document.getElementById
------------------------------------*/

// document.getElementById() est une fonction qui
// va permettre de récupérer un élément HTML à
// partir de mon identifiant unique : ID

let bonjour = document.getElementById('bonjour');
console.log(bonjour);

/*----------------------------------------
        document.getElementsByClassName
-----------------------------------------*/

// document.getElementsByClassName() c'est une 
// fonction qui va permettre de récupérer un
// ou plusieur éléments ( une liste) HTML à
// partir de leur classe

const contenu = document.getElementsByClassName('contenu');
console.log(contenu);
// -- Me renvoi un tableau JS avec les éléments HTML.



/*----------------------------------------
        document.getElementsByTagName
-----------------------------------------*/

// document.getElementsByTagName() c'est une
// fonction qui va permettre de récupérer un 
// ou plusieur éléments ( une liste) HTML à 
// partir de leur balise

const p = document.getElementsByTagName('p');
console.log(p);

// NOTA BENE = https://developper.mozilla.org//fr/docs/Web/API/Document/querySelector