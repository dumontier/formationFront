// $("#MonFormulaire").click('submit'(function (event) {
   
//     event.preventDefault();

//     // $("form").submit(function () {
//     //     return this.some_flag_variable;
//     // });​

// });

// En JS

// document.getElementById('MonFormulaire').addEventListener('submit' function(){
//         event.preventDefault();
// });

$('#MonFormulaire').on('submit', function(){

    // Stopper la redirection
        event.preventDefault();

        // (2)
        // console.log( $(this));

        $('#MonFormulaire').hide();

        // Créer une balise dans le body de HTML
        // puis inserrer le nom & prenom 
        $('<p>').append('Bonjour ' + $('#nomcomplet').val() + ' !').prependTo('body');

        // Ou alors
        // $('<p>Bonjour '+ $('#nomcomplet').val() + ' !</p>').prependTo('body');

        // Et encore (2)
        // $(this).replaceWith('<p>Bonjour '+ $('#nomcomplet').val() + ' !</p>');
});