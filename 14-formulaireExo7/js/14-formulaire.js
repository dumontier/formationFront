$(function(){

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
    // Ecouter le submit
    $("#contact").submit(function(event){

        event.preventDefault();

        // Récupération des valeurs de l'utilisateur
        const nom       = $("#nom");
        const prenom    = $("#prenom");
        const email     = $("#email");
        const tel       = $("#tel");

        // Validation des inputs
        if(nom.val() === " " || prenom.val() === " " || !validateEmail(email.val()) || !validateTel(tel.val())) {
           
            $(this).prepend(`
            <div class="alert alert-danger">
            Veuillez remplir tout le formulaire
            </div>
            `);

        } else {
           
            $(this).replaceWith(`
            <div class="alert alert-success">
            Votre message a bien été transmis
            </div>
            `);
            
        }

    }); //Fin #contact

}); // Fin function