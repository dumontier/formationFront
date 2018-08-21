// alert('Mon fichier JS fonctionne !')
// Deux slash pour faire un commentaire

/*

Ici je peux faire un commentaire
sur plusieurs lignes.
Raccouci : shift + Alt + A

*/


//  --1 : Déclarer une variable JS

var Prenom;

//  --2 : Affecter une valeur

Prenom = "Jean";

//  --3 : Afficher la valeur dans ma console

console.log(Prenom);

/*-----------------------------------------------
|~ ~ Les types de variables ~ ~|
------------------------------------------------*/

//  typeof permet de connaitre le type de variable

console.log(typeof Prenom);

// -- Déclaration et affectation d'un nombre.

var Age = 40;

// pour connaitre son type

console.log(typeof Age);

/*-------------------------------------------------------------------------------------------
 LA PORTEE DES VARIABLES

Les variables JS déclarées directement à la racine du fichier JS appelé : variables GLOBALES.
Elles sont disponibles dans l'ensemble de votre document, y compris dans les fonctions.

###

les variables déclarées à l'intérieur d'une fonction sont appelées variables LOCALES.
Elles sont disponibles UNIQUEMENT dans le scope de la fonction.

---------------------------------------------------------------------------------------------*/

// -- Les variable de type FLOAT

var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les Booléens (VRAI / FAUX)

var unBoolean = false; // true
console.log(unBoolean);
console.log(typeof unBoolean);

// -- Les Constantes
/*
*la déclaration CONST permet de créer une constante accessible
*UNIQUEMENT en lecture. Sa valeur ne pourra pas être modifiée
*par des réaffectation ultérieures. Une constante ne peut pas
*être déclarée à nouveau...
*/

const HOST ="localhost";
const USER = "root";
const PASSWORD ="mysql";

// Je ne peux pas faire cela....
// USER = "hugo";
// TypeError : Assignement to constant variable

var unNombre ="24";
console.log(unNombre);
console.log(typeof unNombre);

/*
*La fonction parseInt() pour retourner un entier
*à partir de mon string
*/

unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Convertir un Float

unNombre ="12.55";
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Convertir un nombre entier ou float en string

unNombre = 10;
var monString =  unNombre.toString();
console.log(monString);
console.log(typeof monString);

