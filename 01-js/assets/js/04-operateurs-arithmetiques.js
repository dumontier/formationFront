/*------------------------------ 
* LES OPERATEURS ARITHMETIQUES
-------------------------------*/

//  ## L'addition
//  ## La soustraction
//  ## La multiplication
//  ## La division
//  ## Le modulo


var nb1, nb2, resultat;
nb1 = 10;
nb2 = 5;

//  ## L'addition
resultat = nb1 + nb2;
console.log("L'addition de nb1 et nb2 = " + resultat);

//  ## La soustraction
resultat = nb1 - nb2;
console.log("La soustraction de nb1 et nb2 = " + resultat);

//  ## La multiplication
resultat = nb1 * nb2;
console.log("La multiplication de nb1 et nb2 = " + resultat);

//  ## La division
resultat = nb1 / nb2;
console.log("La division de nb1 et nb2 = " + resultat);

//  ## Le modulo (Le reste d'une division)
nb1 = 11;
resultat = nb1 % nb2;
console.log("Le modulo de nb1 et nb2 = " + resultat);

/*---------------------------------
    LES ECRITURE SIMPLIFIEES
----------------------------------*/

nb1 = 15;
nb1 = nb1 + 5;
nb1 += 5;

/*
*Je peux procédder de la même mmanière pour tous les autres
*opérateurs arithmétiques : "_", "*", "/", "%"
*/