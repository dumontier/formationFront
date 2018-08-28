$('#contact').submit(function () {

    event.preventDefault();

    // $('#contact .is-invalid').removeClass('is-invalid');
    // $('#contact .is-valid').removeClass('is-valid');
  

    const nom           = $('#nom');
    const prenom        = $('#prenom');
    const email         = $('#email');
    const tel           = $('#tel');
    const LesContacts   = $('#LesContacts');
    
    console.log(nom);

        if( nom.val() === ""){
            nom.addClass('is-invalid');
        } else{
            nom.addContact('is-valid');
        }

        if( prenom.val() === ""){
            prenom.addClass('is-invalid');
        } else {
            prenom.addContact('is-valid');
        }

        if( email.val() === ""){
            email.addClass('is-invalid');
        } else {
            email.addContact('is-valid');
        }
        
        if( tel.val() === ""){
            tel.addClass('is-invalid');
        } else {
            tel.addContact('is-valid');
        }

});