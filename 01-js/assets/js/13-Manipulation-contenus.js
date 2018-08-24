/*--------------------------------------
    LA MANIPULATION DES CONTENUS
--------------------------------------*/
l = e => console.log(e);

// -- Je souhaite récupérer mon lien Google... Comment procéder ?

const google = document.getElementById('google');
l(google);

// -- Maintenant, je souhaite accéder aux information de ce lien..

    // -- A : Le lien vers lequel pointe la balise
    l(google.href);

    //  -- B : ID de la balise
    l(google.id);

    //  -- C : La classe de la balise
    l(google.className);


    //  -- C : Le texte de la balise
    l(google.textContent);


    /*
    *Maintenant, je souhaite modifier le texte de mon lien !
    */

    google.textContent = "Mon lien vers  mongoogleamoi !";


    /*--------------------------------
    AJOUTER UN ELEMENT DANS MA PAGE
    -------------------------------- */

    /*
    *Nous allons procéder en deux étapes :
    *
    * 1. La fonction document.createElement() va permettre
    * de générer un nouvel élément dans mon DOM ; que je
    * pourrais modifier par la suite avec les méthodes que
    *  nous venons de voir.
    *   PS : ce nouvel élément est placé en mémoire
    * 
    * 2. L'ajouter à la page.
    * 
    */

// -- Définition de l'élément
var span = document.createElement('span');

// -- Si je souhaite lui donner un ID
span.id = "monSpan";

//  -- Si je souhaite lui attribuer du contenu
span.textContent = "Mon beau texte en JS";

// -- Je l'ajoute à la page
google.appendChild(span);


var h1 = document.createElement('h1');
h1.id = "monh1";
h1.textContent = "Titre de mon Article";
h1.style.color= "red";
h1.style.textDecoration = "none";
google.appendChild(h1);


var h1 = document.createElement('h1');
var a = document.createElement('a');
a.textContent = "moi meme";
a.href = "#";
h1.appendChild(a);
document.body.appendChild(h1);
a.style.color = "red";
a.style.textDecoration = "none";