/*-----------------------------------------
                LES BOUCLES
-----------------------------------------*/
/*
*Pour i =0 ; tant que i est  */
// for( let i = 0; i <= 10; i++ ){
//     document.write("<p>Instruction exécutée : <strong>" + i +"</strong></p>");
// }

// document.write("<hr>");

// // La boucle while

// var j = 0;
// while( j <= 10){
//     document.write("<p>Instruction exécutée : <strong>" + i + "</strong></p>");
//     // Attention à ne pas oublier
//     j++;
// }

/* -----------------------------
            EXERCICE
------------------------------ */

var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Hugo', 'Jacques'];

/**
 * CONSIGNE : Grâce à une boucle FOR, affichez la liste des prénoms
 * du tableau ci-dessus dans la console, ou sur votre page.
 */

 for( let i = 0 ; i < Prenoms.length ; i++) {
     document.write("<p>Les utilisateurs sont "+ prenoms[i] +"</p>");
    // console.log(Prenoms[k]);
 }