var membres = [
    { 'pseudo': 'Hugo', 'age': 26, 'email': 'wf3@hl-media.fr', 'mdp': 'wf3' },
    { 'pseudo': 'Rodrigue', 'age': 56, 'email': 'rodrigue@hl-media.fr', 'mdp': 'roro' },
    { 'pseudo': 'James', 'age': 78, 'email': 'james@hl-media.fr', 'mdp': 'james8862' },
    { 'pseudo': 'Emilio', 'age': 18, 'email': 'milio@hl-media.fr', 'mdp': 'milioDu62' }
];



// var pseudo = document.getElementById('pseudo');
// var age = document.getElementById('age');
// var email = document.getElementById('email');
// var submit = document.getElementById('submit');
// var pseudoError = document.getElementsByClassName('pseudoError');
// var ageError = document.getElementsByClassName('ageError');

// Etape 1


// Etape 2: Demande et vérification de l'age de l'utilisateur

// function age() {  
// // La condition
//     if (age < 18) {
//        input.submit.disable = true;
//     }
//     else {
//        input.submit.disable = false;
//     }
// }
// age();


// Etape 3
// for(let i = 0 ; i < membres.length; i++){
//     if (membres[i].pseudo == pseudo.value){
        
//     }
// }
// function helloUser(){
//     alert('Bonjour ' + pseudo.value);
// }
// pseudo.addEventListener('change', helloUser);

// Etape 4
// function Person(pseudo, age, email, mdp){
//     this.pseudo = pseudo;
//     this.age = age;
//     this.email = email;
//     this.mdp = mdp;
// }

// membres.debug();


/*---------------------------------------
                CORRECTION
----------------------------------------*/
// Récupération des différents éléments 
const pseudo           = document.getElementById('pseudo');
const age              = document.getElementById('age');
const email            = document.getElementById('email');
const mdp              = document.getElementById('mdp');
const submit           = document.getElementById('submit');
const Bienvenue        = document.getElementById('Bienvenue');
const InscriptionForm  = document.getElementById('InscriptionForm');


const  pseudoError   = document.getElementsByClassName('pseudoError')[0];
const  ageError      = document.getElementsByClassName('ageError')[0] ;

// Etape 1 & 3 : Vérification du pseudo & Afficher une alerte de 'Bienvenue'

        // Ecouter l'évènement avec une Fonction inconnue

pseudo.addEventListener ('input', function () {

    // console.log( pseudo.value);
    for( let i = 0; i< membres.length; i++){
        // console.log( membres[i]);

        if( pseudo.value === membres[i].pseudo ){
            pseudoError.style.display = 'block';
            submit.disabled = true;
            Bienvenue.textContent = '';

            break;

        }else{
            pseudoError.style.display = 'none';
            submit.disabled = false;
            Bienvenue.textContent = 'Bienvenue ' + pseudo.value;
        }

    }
});

// Etape 2: Demande et vérification de l'age de l'utilisateur

const majoriteLegale = 18;

        // Ecouter l'évènement avec une Fonction inconnue
age.addEventListener('change', function(){
        console.log(age.value);

    if (age.value >= majoriteLegale) {

        ageError.style.display = 'none';
        submit.disabled = false;

    } else {

        ageError.style.display = 'block';
        submit.disabled = true;
    }
});

// Etape 4: Intégrer le login de l'utilisateur dans le tableau

InscriptionForm.addEventListener('submit', function (event){

// Par défaut Stopper la redirection HTML(sinon direction vers une page PHP)
    event.preventDefault();

    const membre = {
        'pseudo': pseudo.value, 
        'age': age.value, 
        'email': email.value, 
        'mdp': mdp.value 
    };
        // Ajouter un login dans le tableau
        membres.push(membre);
        console.log(membres);

        // paragraphe 
        const p = document.createElement('p');
        p.innerHTML = 'Merci ' + pseudo.value + ' ! <strong>Tu es maintenant inscrit.</strong><br><br><span>Voici la liste des membres :</span>';
        document.body.appendChild(p);

        // -- Générer la liste des membres
        const ul = document.createElement('ul');
        for( let i = 0; i < membres.length; i++){
            let li = document.createElement('li');
            li.textContent = membres[i].pseudo + ' : ' + membres[i].age + ' ans';
            ul.appendChild(li);
            }

document.body.appendChild(ul);

});

