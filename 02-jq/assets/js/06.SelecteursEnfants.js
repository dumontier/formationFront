/*-------------------------------------------
LES SELECTEURS D'ENFANTS JQUERY
--------------------------------------------*/

$(function(){

        l = e => console.log(e);

        // Je souhaite sélectionner toutes les DIV de ma page
        l($('div'));

        // Je souhaite sélectionner la balise NAV de ma page
        l($('#menu'));

        // En partant du menu, je souhaite sélectionner, tous les éléments
        // descendant direct (enfants) qui sont dans NAV.
        l($('#menu').children());
        
        // Parmi ces descendants, uniquement l'élément UL
        l($('#menu').children('ul'));

        // En partant de UL, je souhaite récupérer tous les éléments LI
        l($('#menu').children('ul').find('li'));
        l($('#menu').find('li'));

        // Je souhaite récupérer le 2ème élément LI
        l($('#menu').find('li').eq(1));

        // Je souhaite connaitre le voisin immediat de mon menu
        l($('#menu').next());
        l($('#menu').next().next()); //Le voisin du voisin
        l($('#menu').prev()); //Le voisin d'avant

        // Je souhaite connaitre le parent
        l($('#menu').parent());
         });