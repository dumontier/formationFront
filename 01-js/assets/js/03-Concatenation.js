/*-----------------------------------------------------
                LA CONCATENATION
-----------------------------------------------------*/
var DebutDePhrase = "Aujourd'hui";
var DateDuJour = new Date();
var SuiteDePhrase = ", sont présent : ";
var NombreDeStagiaire = 10;
var FinDePhrase = " apprenants.<br>";

/*
*Nous souhaitons maintenant, grace à la concatenation,
*afficher le tout en une phrase sur notre page
*/

document.write(DebutDePhrase + DateDuJour.getDate() + "/" + (DateDuJour.getMonth() + 1) + "/" + DateDuJour.getFullYear() +  SuiteDePhrase + NombreDeStagiaire + FinDePhrase);