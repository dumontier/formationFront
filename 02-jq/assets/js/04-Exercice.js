/************************************************************************** 
        CONSIGNE : Avec l'aide de jQuery, vous devrez :

        1. A la soumission du formulaire, cacher le formulaire puis:
        2. Créer un élément < p >
        3. Dans cet élément, afficher: Bonjour < nomcomplet > correspondant
        au nom saisie dans le formulaire.
        Intégration de la librairie jQuery
**************************************************************************/

/************************************
            CORRECTION
************************************/

$(function(){

    // document.getElementById('MonFormulaire').addEventListener('submit', function(event) {

    // event.preventDefault();
    // });

    // $("#MonFormulaire").submit(function() {
    // });

    $("#MonFormulaire").on('submit', function (e) {

        // Stopper la redirection
        e.preventDefault();

        console.log($(this));

        // Cacher le Formulaire
        $("#MonFormulaire").hide();

        // $('<p>').append('Bonjour ' + $('#nomcomplet').val() + ' !').appendTo('body');
        // $('<p>Bonjour <strong>' + $('#nomcomplet').val() + '</strong> !</p>').appendTo('body');

        $(this).replaceWith('<p>Bonjour <strong>' + $('#nomcomplet').val() + '</strong> !</p>');
    })
});