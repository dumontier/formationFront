/*-----------------------------------------------------------------------
                LA DISPONIBILITE DU DOM

    A partir du moment , ou mon DOM, c'est à dire, l'ensemble
    de l'arborescence de ma page HTML est complètement chargés;
    je peux commencer à utiliser jQuery.

    je vais mettre l'ensemble de mon code dans une fonction,
    qui sera AUTOMATIQUEMENT ! par jQuery lorsque le DOM sera
    entièrement défini.

    3 façons de faire:

------------------------------------------------------------------------ */
// 1ère méthode
jQuery(document).ready(function(){
    // -- ici le DOM est entièrement chargé; je peux procéder à mon code.
    // ..
    // ..
    // ..
    // ..
});

// 2ème méthode
$(document).ready(function (){});

// 3ème méthode
$(function (){
    // ..
});

// 4ème méthode
$(() =>{
    // alert("Bienvenue dans ce cour JQ!");

    // -- En JS
    // document.getElementById('textEnJS').innerHTML = "<strong>Mon texte en JS</strong>";

    // -- En JQ
    $('#textEnJQ').html('Mon texte en JQ !');
});