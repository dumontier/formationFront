/* -------------------------------------------------
|             ~~~   LA CONSIGNE     ~~~            |
|                                                  |
| Créez un Formulaire HTML Bootstrap avec les      |
| champs suivants :                                |
|                                                  |
|   1. Nom, Prénom, Email, Tel                     |
|                                                  |
------------------------------------------------- */
// Valider l'Email
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

// Valider le Téléphone
var validateTel = tel => {
    var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
    return telReg.test(tel);
}

$('#contact').submit(function(){

    event.preventDefault();

    $('#contact .is-invalid').removeClass('is-invalid');
    $('#contact .is-valid').removeClass('is-valid');
    $('#contact')

    const nom       = $('#nom');
    const prenom    = $('#prenom');
    const email     = $('#email');
    const tel       = $('#tel');

    // Validation du champ 'nom'(2 façons)
    // if( nom.val().length === 0 )
    if( nom.val() === "" ){

       nom.addClass('is-invalid');
    }
    if(prenom.val() === ""){

        prenom.addClass('is-invalid');
    }
    if (email.val() === "") {

        email.addClass('is-invalid');
    }
    if (tel.val() === "") {

        tel.addClass('is-invalid');
    }


   if(!validateEmail( email.val())){
       email.addClass('is-invalid');

   }else{
       nom.addClass('is-valid');
   }
    // Validation du champ 'tel'
    if(!validateTel(tel.val())){
        tel.addClass('is-invalid');
    };   
    
    if($(this).find('.is-invalid').length === 0 ){

        $(this).replaceWith(`
        <div class="alert alert-success">
        Votre contact à bien été transmis !
        nous vous répondrons dans les meilleurs délais.
        </div>
        `);
    }else{
        $(this).prepend(`
        <div class="alert alert-danger">
        nous n'avons pas été en mesure de valider votre
        contact. Vérifiez vos informations.
        </div>
        `);
    }

});