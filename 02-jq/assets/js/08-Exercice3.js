// $(function(){

// // Valider l'email
// // function validateEmail(email) {
// //     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// //     return re.test(email);
// // }

// $('#contact').submit(function () {

//     event.preventDefault();

//     // $('#email .is-invalid').removeClass('is-invalid');
//     // $('#email .is-valid').removeClass('is-valid');
//     // $('#email .alert-danger').remove();

//     if($('#nom').val() === ""){
//         $(`<div class='is-invalid' style='color: red'>
//         Recommencez
//         </div>`).insertAfter('#nom');
//     } else {
//         $(`<div class='is-valid' style='color: green'>
//         Enregistrer
//         </div>`).insertAfter('#nom');
//     }
    
//     if ($('#prenom').val() === "") {
//         $(`<div class='is-invalid' style='color: red'>
//         Recommencez
//         </div>`).insertAfter('#prenom');
//     } else {
//         $(`<div class='is-valid' style='color: green'>
//         Enregistrer
//         </div>`).insertAfter('#prenom');
//     }
    
//     if ($('#email').val() === "") {
//         $(`<div class='is-invalid' style='color: red'>
//         Recommencez
//         </div>`).insertAfter('#email');
//     } else {
//         $(`<div class='is-valid' style='color: green'>
//         Enregistrer
//         </div>`).insertAfter('#email');
//     }
    
//     if ($('#tel').val() === "") {
//         $(`<div class='is-invalid' style='color: red'>
//         Recommencez
//         </div>`).insertAfter('#tel');
//     } else {
//         $(`<div class='is-valid' style='color: green'>
//         Enregistrer
//         </div>`).insertAfter('#tel');
//     }
    
    
//     })
// });
/*********************************************
                 CORRECTION
*********************************************/


// -- 1- Initialiser jQuery (DOM READY)

$(function () {

// -- 2- Déclaration d'un tableau pour stocker les contacts
    var CollectionDeContacts =[];

    /*-- 3- FONCTIONS */
    /* 1- valider une adresse mail*/

   function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    /*Valider un numéro de téléphone*/
    var validateTel = tel => {
        var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        return telReg.test(tel);
    }
    
    /*-- 4- TRAITEMENT DU FORMULAIRE*/

// -- 5- Détecter l'envoi du formulaire (tout le travail de vérification
    // des champs du formulaire se fait dans une fonction .on('submit'))

$('#contact').on('submit', function (e) {

// -- 6- stopper la redirection de la page
        event.preventDefault();

// -- 7- récupérer les champs pour en vérifier les valeurs
        let nom, prenom, email,tel;
        nom     = $('#nom');
        prenom  = $('#prenom');
        email   = $('#email');
        tel     = $('#tel');

// -- 8- création d'une variable de vérification (booléen)
        let mesInformationsSontValides = true;

// -- 9- vérification des champs

        // -- 9.1- le prénom (longueur)
            if(prenom.val().length === 0){
                // Dans l'IF le champs n'est pas renseigné
                mesInformationsSontValides = false;
                // Donc le champs n'est pas valide
            }

        // -- 9.2- le nom (longueur)
            if (nom.val().length === 0) {
                // Dans l'IF le champs n'est pas renseigné
                mesInformationsSontValides = false;
                // Donc le champs n'est pas valide
            }

        // -- 9.3- le téléphone (fonction)
            if(!validateTel(tel.val())){
                // Si l'utilisateur a saisi des caractères non conformes
                // à ce qui est attendu (définie dans la fonction validateTel)
                // alors la fonction validateTel retourne 'false'
                mesInformationsSontValides = false;
            }

        // -- 9.4- le mail (fonction)
            if(!validateEmail(email.val())){
                mesInformationsSontValides = false;
            }
                 // console.log(mesInformationsSontValides);

// -- 10- si les champs sont tous valides
               
            if (mesInformationsSontValides){

        // -- 10.1- préparer le contact (objet)
                let Contact = {
                    // indice / clé et la valeur
                    nom     : nom.val(),
                    prenom  : prenom.val(),
                    email   : email.val(),
                    tel     : tel.val()
                };
                    // console.log(Contact);
        // -- 10.2- vérification si le contact existe déjà (variable + for)
                let estPresent = false;

            // -- 10.2.1 parcourir le tableau des contacts pour chercher si
                      // l'utilisateur existe
                for (let i = 0; i < CollectionDeContacts.length; i++){
                    if (Contact.email === CollectionDeContacts[i].email){
                        estPresent = true;

                        break; // force la sortie si il y a une correspondance
                    }
                }
                        // console.log(estPresent);

        // -- 10.3- si le contact est absent
                if(!estPresent){

        // -- 10.3.1- ajouter au tableau des contacts
                    CollectionDeContacts.push(Contact);

        // -- 10.3.2- mettre à jour l'affichage du tableau HTML
                    // cacher ce qui est écrit dans 'aucuncontact'
                    $('.aucuncontact').hide();

                    // le contenu du formulaire
                    $(`<tr><td>${Contact.nom}</td><td>${Contact.prenom}</td><td>${Contact.email}</td><td>${Contact.tel}</td></tr>`).appendTo( $('#LesContacts > tbody'));
                    
        // -- 10.3.3 réinitialisation du formulaire
                    $('#contact')[0].reset();
                    $('#contact').get(0).reset();
                    $('#contact').trigger('reset');
                    $('#contact .form-control').val('');
                    document.getElementById('contact').reset();

                    //  -- 10.3.4- Afficher un message
                    $('alert.contact').fadeIn().delay(4000).fadeOut();
                } else{
                    //  -- 10.3.5- alerte si le contact est présent
                    alert('Attention !\nTu es déja inscrit!');
                }

            } else{
                // alerte utilisateur si un champs est mal renseigné
                alert('Attention\nVeuillez renseigner tous les champs.');
                //  \n retour à la ligne
            }








    });  // -- Fin de on.('submit')

}); // -- Fin de jQuery Ready

