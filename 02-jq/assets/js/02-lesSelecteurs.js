/*------------------------------------------
        LES SELECTEURS JQUERY 😂
------------------------------------------ */
// -- Format JQ =>$('Sélecteur');

// -- Format JS => document.getElementsByTagName('balise');     => en JQ => $('balise');
// -- Format JS => document.getElementsByClassName('classe');    => en JQ => $('.classe');
// -- Format JS => document.getElementsById('id');              => en JQ => $('#id');

// -- Format JS => document.querySelector('balise');    => en JQ => $('balise');
// -- Format JS => document.querySelector('.classe');   => en JQ => $('.classe');
// -- Format JS => document.querySelector('#id');       => en JQ => $('#id');

$(function(){

    l = e => console.log(e);
    l('Hello');

    // -- Sélectionner les SPAN
    // en JS
    l(document.getElementsByTagName('span'));
    // en JQ
    l($('span'));

    // -- Sélectionner le menu par son ID
    // en JS
    l(document.getElementById('menu'));
    // en JQ
    l($('#menu'));

    // -- Sélectionner le menu par sa Classe
    // en JS
    l(document.getElementsByClassName('MaClasse'));
    // en JQ
    l($('.MaClasse'));

    /*---------------------------------------------
    JQ ne retourne qu'un object (jamais de tableau)
    ----------------------------------------------*/

    // -- Sélectionner un élément de ma page par son attribut
    l($('[href="#"]'));
    l($('[action="home.php"]'));
});