// BENCHMARK - BOUCLES JS
// http://jsbench.github.io/#6bdfcd2692ba80c16a68c88554281570



/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.

    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc

    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) 

de sa moyenne à chaque matière, puis sa moyenne générale. 

*/

// // Le tableau
// var PremierTrimestre = [

// // 1er étudiant(e) (n°0)
//     { 
//         nom :"LIEGEARD",
//         prenom: "Hugo",
//         matieres: [
//             {
//                 nom: "français",
//                 moyenne: 12
//             },
//             {
//                 nom:"mathématique",
//                 moyenne: 19
//             },
//             {
//                 nom: "anglais",
//                 moyenne: 16
//             },
//             {
//                 nom: "physique",
//                 moyenne: 4
//             },
//         ]
//     },

// // 2ème étudiant(e) (n°1)
//     {
//         nom: "HOCHET",
//         prenom: "Eric",
//         matieres: [
//             {
//                 nom: "français",
//                 moyenne: 18
//             },
//             {
//                 nom: "mathématique",
//                 moyenne: 15
//             },
//             {
//                 nom: "philosophie",
//                 moyenne: 6
//             },
//             {
//                 nom: "musique",
//                 moyenne: 16
//             }
//         ]
//     },

// // 3ème étudiant(e) (n°2)
//     {
//         nom: "DELUNE",
//         prenom: "Claire",
//         matieres: [
//             {
//                 nom: "français",
//                 moyenne: 19
//             },
//             {
//                 nom: "mathématique",
//                 moyenne: 9
//             },
//             {
//                 nom: "biologie",
//                 moyenne: 17
//             }       
//         ]
//     },

// // 4ème étudiant(e) (n°3)
//     {
//         nom: "HOTEBASCK",
//         prenom: "Paul",
//         matieres: [
//             {
//                 nom: "français",
//                 moyenne: 15
//             },
//             {
//                 nom: "philosophie",
//                 moyenne: 14
//             },
//             {
//                 nom: "anglais",
//                 moyenne: 18
//             },
//             {
//                 nom: "russe",
//                 moyenne: 15
//             }
//         ]
//     },

// // 5ème étudiant(e) (n°4)
//     {
//         nom: "BONNOT",
//         prenom: "Jean",
//         matieres: [
//             {
//                 nom: "anglais",
//                 moyenne: 19
//             },
//             {
//                 nom: "mathématique",
//                 moyenne: 17
//             },
//             {
//                 nom: "biologie",
//                 moyenne: 5
//             },
//             {
//                 nom: "philosophie",
//                 moyenne: 8
//             }
//         ]
//     }
// ];

// console.log(PremierTrimestre);

// Pour remplacer document.write(PremierTrimestre);
// w = e => document.write(e);

// w(PremierTrimestre);

// for (var i = 0; i < PremierTrimestre.length; i++) {
//     w(PremierTrimestre.length[i]);
// }

//   for (var i = 1000; i <= 2000 ; i+=50){
//      document.write("<h2>Instruction répétée : " + i +"</h2>");
//   }



/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.

    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc

    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) 

    de sa moyenne à chaque matière, puis sa moyenne générale. 

*/

var PremierTrimestre = [
    {
        prenom: "Hugo",
        nom: "LIEGEARD",
        moyenne: {
            francais: 4,
            math: 6,
            physique: 18
        }
    },
    {
        prenom: "Luc",
        nom: "JOINVIL",
        moyenne: {
            francais: 4,
            math: 5,
            physique: 16,
            eps: 18,
            chimie: 17
        }
    },
    {
        prenom: "Layla",
        nom: "LAHCENE",
        moyenne: {
            francais: 17,
            math: 2,
            physique: 10,
            svt: 18,
            arabe: 10
        }
    },
    {
        prenom: "Alpha",
        nom: "DIALLO",
        moyenne: {
            francais: 12,
            math: 8,
            physique: 14,
            philo: 5,
            eps: 19
        }
    },
    {
        prenom: "Elies",
        nom: "KEDIM",
        moyenne: {
            francais: 2,
            math: 18,
            physique: 17,
            informatique: 15
        }
    }
];

// console.log(PremierTrimestre);
// w("<ol>");
// for (let i = 0; i < PremierTrimestre.length; i++) {
    
//     w("<li>" + PremierTrimestre[i].prenom + " " + PremierTrimestre[i].nom + "</li>");
    
    
//     for (let matiere in PremierTrimestre[i].moyenne) {
//         w("<ul><li>" + matiere + PremierTrimestre[i].moyenne[matiere] + "</li></ul>");
        
//     }
    
//         var m = PremierTrimestre[i].moyenne.length;
//         var somme = 0;
//         somme += PremierTrimestre[i].moyenne.number;
//         var resultat = somme / m;
    
//     for (let i = 0; i <= m; i++) {
//         w("<li>La moyenne globale = " + resultat + "</li>");
//     }
// }

// w("</ol>");



/*

 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.
    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    **** Vous allez créez au minimum 5 étudiants ****
II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ol / ul et li) 
de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

​
​

// -- Les Flémards.js  
w = e => document.write(e);
l = e => console.log(e);

// -- 1. Je souhaite afficher la liste de mes étudiants.
w('<ol>');
for (let i = 0; i < PremierTrimestre.length; i++) {

    // -- Vérification dans la console
    console.log(PremierTrimestre[i]);

    // -- 2. Afficher les étudiants sur ma page
    let etudiant = PremierTrimestre[i];
    w('<li>');

    w(etudiant.prenom + " " + etudiant.nom);

    var nombreDeMatiere = 0, sommeDesNotes = 0;

    // -- 3. Afficher la moyenne obtenu par mon etudiant a chaque matiere
    w('<ul>');
    for (let matiere in etudiant.moyenne) {


        nombreDeMatiere++;
        sommeDesNotes += etudiant.moyenne[matiere];

        // -- Affichage sur la page
        w('<li>');
        w(matiere + " : " + etudiant.moyenne[matiere]);
        w('</li>');

    }
    w('<li>');
    w('<strong>Moyenne Générale :</strong>' + (sommeDesNotes / nombreDeMatiere).toFixed(2));
    w('</li>');

    w('</ul>');
    l('------');

    w('</li><br>');
}
w('</ol>');

