/*------------------------------------------------
        LE CHAINAGE DE METHODE AVEC JQUERY
------------------------------------------------ */

$(function(){
    // Voir les DIV de la page
    console.log($('div'));

    // Cachert toutes les DIV de la page HTML
    $('div').hide('slow', function(){
        /*
        *la methode hide() de JQ:
        *- est une animation
        *- s'applique sur tous les éléments ciblés de mon sélecteur
        *------------------
        *A la fin du .hide() on ajoute pour voir une alert()
        */

        //mettre de la couleur sur les DIV 
    // $('div').css('background', 'green');
    // $('div').css('color', 'red');
    // $('div').show('slow');

        // La couleur sur les P en + simple
        $('p').hide(1000).css('color', 'blue').css('font-size', '30px').delay(2000).show(500);

    }); //-- fin du hide()
    // alert('fin du hide() !');


}); //-- fin de $()