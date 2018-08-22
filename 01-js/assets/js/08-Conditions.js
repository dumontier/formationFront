/*------------------------------
        LES CONDITIONS
-------------------------------*/

// var majoriteLegaleFr = 18;

// if( 14 >= majoriteLegaleFr){
//     alert("Bienvenue !");
// }
// else {
//     alert("Vas voir chez google si ..");
// }

/* -------------------------------
             EXERCICE

    Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
    S'il a la majorité légale, alors je lui souhaite la bienvenue, 
    sinon, je fait une redirection sur Google après lui avoir signalé le soucis.

---------------------------------------------- */

// Appel de l'age avec le prompt
// var age = parseInt(prompt("Bonjour, quel es ton age"));

// function age() {
//    var age = parseInt(prompt("Bonjour, quel es ton age"));

// La condition
//     if (age >= 18) {
//         alert("Bienvenue, tu es majeur");
//     }
//     else {
//         document.location.href = "http://www.google.com";
//     }
// }
// age();

/* -------------------------------
             EXERCICE

    Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
    S'il a la majorité légale, alors je lui souhaite la bienvenue, 
    sinon, je fait une redirection sur Google après lui avoir signalé le soucis.

-------------------------------- */

// // -- 1. Déclarer la majorité
// const MAJORITELEGALEFR = 18;

// // -- 2. Vérifier si l'utilisateur est majeur (fonction)
// function monUtilisateurEstMajeur(age) {
//     if (age >= MAJORITELEGALEFR) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // -- 3. Je demande à l'utilisateur son age
// var age = parseInt(prompt("Bonjour, Quel age avez-vous ?", "<Saisissez votre Age>"));

// // -- 4. Vérification
// if (monUtilisateurEstMajeur(age)) {

//     alert("Bienvenue sur mon site internet réservé aux majeurs");
//     document.write("0_0 !!!");

// } else {
//     // -- 5. Redirection
//     document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";

// }

/*--------------------------------------------------------------------
                LES OPERATEURS DE COMPARAISON
    L'opérateur de comparaison " == " signifie : Egal à.
    Il permet de vérifier que 2 variables sont identiques.

    L'opérateur de comparaison " === " signifie : Strictement égal à.
    Il va comparer la valeur, mais aussi le type !

    L'opérateur " != " : Différent de 
    L'opérateur " !== " : Strictement différent de
---------------------------------------------------------------------*/

/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// // -- BASE DE DONNEES
        // var email, mdp;

        // email = "wf3@hl-media.fr";
        // mdp = "wf3";

        // // demande d'Email
        // var UserEmail = prompt("Bonjour, veuillez taper votre email","<Saisissez votre email>");

        // // 1ère condition
        // if( UserEmail == email){

        //     // demande du password
        //     UserMdp = prompt("Veuillez taper votre password","<Saisissez votre password>");

        // } else {
        //     alert("Veuillez recommencer")
        // }

        // // 2ème condition
        // if( UserMdp == mdp){
        //     document.write("Bienvenue sur mon site");
        // } else{
        //     alert("Veuillez recommencer depuis le début");
        // }

/*------------------------------------
            Correction
------------------------------------*/


// // -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

// // -- 1. Demander a l'utilisateur son email
var emailUser = prompt("Bonjour, Quel est votre adresse email ?", "<Saisissez votre email>");
var mdpUser = prompt("votre mot de passe ?", "<Saisissez votre mot de passe>");

// -- Exemple SANS les fonctions
// // -- 2. Je vérifie si l'email saisie correspond avec celle dans la BDD
// if ( emailUser === email && mdpUser === mdp ) {

// // -- 3. Tous est ok
// alert("Bienvenue " + emailUser + " !");
// } else {

// // -- 4. Erreur au niveau de l'identification.
// alert("ATTENTION, email / mot de passe incorrect.");
// }


// -- Exemple AVEC une fonction
function login(emailUser, mdpUser) {
    return emailUser === email && mdpUser === mdp;
}

if (login(emailUser, mdpUser)) {
    alert("Bienvenue " + emailUser + " !");
} else {
    alert("ATTENTION, email / mot de passe incorrect.");
}

/*--------------------------------------------------------------------------
                LES OPERATEURS LOGIQUES
---------------------------------------------------------------------------*/
// ## L'opérateur ET : &&. Si la combinaison email et emailUser
//    correspond, ET la combinaison mdp ET mdpUser correpond.
//    
//    --> Dans cette condition, les 2 doivent OBLIGATOIREMENT
//    correspondre pour être validées.
//    Ex. if(emailUser === email && mdpUser === mdp){....}
// 
// 
// ## L'opérateur OU : ||. Si la combinaison email et emailUser
//    correspond, ET/OU la combinaison mdpUser et mdp correspond.
// 
//    --> Dans cette condition, au moins l'une des 2 doivent OBLIGATOIREMENT
//    correspondre pour être validée.
//    Ex. if(emailUser === email || mdpUser === mdp){....}
// 
// ## L'opérateur " ! " : ou encore NOT. 
//    Il signifie le CONTRAIRE de.
// 
//    var monUtilisateurEstApprouve = true;
//    if( !monUtilisateurEstApprouve ){....}
//    Si mon utilisateur n'est pas approuvé.
// 
//    Reviens à écrire
//    if( !monUtilisateurEstApprouve === false ){....}
/*--------------------------------------------------------------------------*/