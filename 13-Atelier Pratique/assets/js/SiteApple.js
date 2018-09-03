$(function () {

    // Valider l'Email
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    // Valider le téléphone
    var validateTel = tel => {
        var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        return telReg.test(tel);
    }

    $('#contact').submit(function () {
        event.preventDefault();

        $('#contact .is-invalid').removeClass('is-invalid');
        $('#contact .is-valid').removeClass('is-valid');
        $('#contact .alert-danger').remove();

        const login = $('#nomPrenom');
        const email = $('#email');
        const tel = $('#tel');
        const sujet = $('#sujet');
        const message = $('#message');

        // Validation du champ 'login'
        if (login.val().length === 0) {

            login.addClass('is-invalid');
        } else {

            login.addClass('is-valid');
        }
        // Validation du champ 'sujet'
        if (sujet.val().length === 0) {

            sujet.addClass('is-invalid');
        } else {

            sujet.addClass('is-valid');
        }

        // Validation du message
        // if(message.val() === ""){

        //     message.addClass('is-invalid');
        // }
        // else {

        //     message.addClass('is-valid');
        // }

        // Validation du champ 'email'
        if (!validateEmail(email.val())) {

            email.addClass('is-invalid');
        } else {

            email.addClass('is-valid');
        }

        // Validation du champ 'tel'
        if (!validateTel(tel.val())) {

            tel.addClass('is-invalid');
        } else {

            tel.addClass('is-valid');
        }

        // if ($(this).find('.is-invalid').length === 0) {

        //     $(this).replaceWith(`
        // <div class="alert alert-success">
        // Votre message à bien été transmis !
        // nous vous répondrons dans les plus brefs délais.
        // </div>
        // `);
        // } else {

        //     $(this).prepend(`
        // < div class ="alert alert-danger" >
        // Nous n'avons pas été en mesure de valider votre
        // message. Vérifiez vos informations.
        // </div>
        // `);
        // }

    });

}); // Fin function
