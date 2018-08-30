$(function(){
    //  Déclarer un tableau indexé
    const prenoms = ['layla', 'jonathan', 'Araut', 'Jhordan', 'Eies'];

    console.log( prenoms);
    console.log(prenoms[3]);
    console.log(prenoms[0]);

    for(let i = 0; i < prenoms.length; i++){
        console.log(prenoms[i]);

    }
// ***********************************************
    const login = {
        nom: 'dumontier',
        prenom: 'Jean_philippe',
        adresse: '43, rue du haut de la noue',
        tel: '01 02 03 04 05',
    }
        console.log(login.nom + ' ' + login.prenom);

    var contacts = [
        {
            nom: 'durant',
            prenom: 'eric'
        },
        {
            nom: 'dupont',
            prenom: 'marc'

        },
        {
            nom: 'dumon',
            prenom: 'yves'
        }
    ];
// *************************************************

document.write('<ul>');

    for (let i = 0; i < contacts.length; i++){
        document.write('<li>');

        document.write(contacts[i].nom);

        document.write('</li>');
    }
document.write('</ul>');

    var ul = document.createElement('ul');

    for (let i = 0; i < contacts.length; i++) {
        li = document.createElement('li');
        li.textContent = contacts[i].nom + ' ' + contacts[i].prenom;
        ul.appendChild(li)
        
    }
    document.body.appendChild(ul);
});

