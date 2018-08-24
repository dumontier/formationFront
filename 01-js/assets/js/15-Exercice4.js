var membres = [
    { 'pseudo': 'Hugo', 'age': 26, 'email': 'wf3@hl-media.fr', 'mdp': 'wf3' },
    { 'pseudo': 'Rodrigue', 'age': 56, 'email': 'rodrigue@hl-media.fr', 'mdp': 'roro' },
    { 'pseudo': 'James', 'age': 78, 'email': 'james@hl-media.fr', 'mdp': 'james8862' },
    { 'pseudo': 'Emilio', 'age': 18, 'email': 'milio@hl-media.fr', 'mdp': 'milioDu62' }
];



var pseudo = document.getElementById('pseudo');
var age = document.getElementById('age');
var email = document.getElementById('email');
var submit = document.getElementById('submit');
var pseudoError = document.getElementsByClassName('pseudoError');
var ageError = document.getElementsByClassName('ageError');

for(let i = 0 ; i < membres.length; i++){
    if (membres[i].pseudo == pseudo.value){
        
    }
}
function helloUser(){
    alert('Bonjour ' + pseudo.value);
}
pseudo.addEventListener('change', helloUser);
