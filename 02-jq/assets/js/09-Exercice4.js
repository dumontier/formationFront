/**********************************************
                GEOLOCALISATION
***********************************************/ 

// $(function () {
//     // Requète AJAX simple (Requète assynchrone)
//     $.ajax('http://geoip.nekudo.com/api/')
//         .done(function (data) {
//             console.log(data);
//             console.log(data.ip);
//         });

//     // 2ème façon avec getJSON
//     $.getJSON('https://ipapi.co/json', data =>{
//             console;log()
//     });
// });


$(function () {

    // 1. Une requète AJAX SIMPLE
    $.ajax('http://geoip.nekudo.com/api/')
        .done(function (data) {
            console.log(data);
            console.log(data.ip);
        });

    // 2. avec getJSON
    $.getJSON('https://ipapi.co/json', data => {
        console.log(data)

        $(`<p>
            Votre IP est surveillée : ${data.ip}<br>
            ${data.org} - ${data.region}
            </p>
        `).css({ background: 'yellow', color: 'red' }).appendTo('body');

    });

});