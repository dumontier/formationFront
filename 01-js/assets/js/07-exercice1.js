/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */
// var somme = prompt("Entrez la valeur en Euros :");
// var resultat = somme * 6.55957;
// alert(somme + " E\n" + resultat + " Frs");


// function administration(){
//     var prenom = prompt("Quel est ton prenom");
//     var age = parseInt(prompt("Bonjour" + prenom + " " + "Quel est ton age"));
//     var date = new Date();
//     var naissance = age - date.getFullYear();
//     alert("Tu es donc nait " + naissance);
//     return("Bonjour" + prenom + age + date + naissance );
// }
// document.write(administration());

// // -- 1. Initialisation des Variables
// var objetDate = new Date();
// var anneeActuelle = objetDate.getFullYear();

// // -- 2. Création d'une fonction
// function Indentity() {

// // -- 3. Je demande à l'utilisateur son Prénom
//     var prenom = prompt("Bonjour! quel es ton nom", "<Saisir ton prenom>");
//     console.log(prenom);
//     console.log(typeof prenom);

// // -- 4. Je lui demande son age
//     var age = prompt("Bonjour" + prenom + "Quel age as tu ","<Saisir ton age>");
//     console.log(age);
//     console.log(typeof age);

// // -- 5. Déduire l'année de naissance et l'afficher dans un alerte
// var anneeDeNaissance = anneeActuelle - age;
// alert("AMAZIN! So you were born in" + anneeDeNaissance);

// // -- 6. Récapitulatif dans la page
// document.write("bonjour" + prenom + "tu es" + age + "Tu es nait en ");
// }

// // -- 7. Executer la fonction
// Indentity();

// -- 1. Initialisation des Variables
var objetDate = new Date();
var anneeActuelle = objetDate.getFullYear();

// -- 2. Création d'une fonction
function Indentity() {

// -- 3. Je demande à l'utilisateur son Prénom
var prenom = prompt("Bonjour! quel es ton nom", "<Saisir ton prenom>");
console.log(prenom);
console.log(typeof prenom);

// -- 4. Je lui demande son age
var age = prompt("Bonjour " + prenom + " Quel age as tu ", "<Saisir ton age>");
console.log(age);
console.log(typeof age);

// -- 5. Déduire l'année de naissance et l'afficher dans un alerte
var anneeDeNaissance = anneeActuelle - age;
alert("Pas possible ! tu es nait en " + anneeDeNaissance);

// -- 6. Récapitulatif dans la page
document.write("bonjour" + " " + prenom + " " + "tu as " + age + " ans tu es, donc nait en " + anneeDeNaissance);
}

// -- 7. Executer la fonction
Indentity();