/*----------------------------------
            LES FONCTIONS
----------------------------------*/

/*
* Déclarer une fonction
* NB : Cette fonction ne retourne aucune valeur
* et ne prend pas de paramètre
 */

function bonjour() {
    document.write("Boujour !");
}
/*
* J'exécute ma fonction "bonjour()" et 
* déclare ses instruction.
 */
bonjour();

// function nomDeMaFonction(argument 1, argument 2, argument n){
//     Les instructions
// }

function ditBonjour(prenom, nom){
    document.write("Bonjour <strong>" + prenom + " " + nom + "</strong> !");
}
// exécuter la fonction avec des arguments
ditBonjour("Jean-Philippe", "Dumontier");

/*---------------------------------------------------s
Exercice :
Créer une fonction permettant d'efféctuer l'addition
de 2 nombres (nb1 et nb2)
----------------------------------------------------*/

function addition( nb1, nb2){
    return nb1 + nb2;
}

console.log(addition(10, 5));
