// $(function(){

//     $.getJSON('https://jsonplaceholder.typicode.com/posts',function(data) {
//             // console.log(articles);
//             console.log(data);
        

//         for(let i = 0; i < data.length; i++){
//             console.log(data[i]);
            
//             $(`<section>
//             <header>
//             ${data[i].title}
//             </header>
//             <article>
//             ${data[i].body}
//             </article>
//             </section>
//             `).appendTo($('main'));
//         }

//         // l = e = console.log(e);
//         // l($('main').find('body.data'));
    
//     });
// });

// ***********************************
//          CORRECTION
// ***********************************

$(function () {
    // 1 Récupérer les articlesde l'API
    $.ajax('https://jsonplaceholder.typicode.com/posts').done(function(articles){

    console.log(articles);

    // 2 Parcourir les articles avec (.each) et les affiches sur la page
        $.each(articles, function(index, article){

            // Vérification dans la console
            // console.log(index + ' ' + article.title);

            // Affichage dans la page
            $(`
            <section>
            <header>
                <h1>${article.title}</h1>
            </header>
            <article>
                ${article.body}
            </article>
            </section>
            `).appendTo($('main'));

    // 3 Récupérer uniquement 10 articles
            if(index === 9){
                return false;
            }

        }); // end $.each

    }); // end $.ajax

    // 4 MarkJS
    $('#markJS').on('input', function(){
        // console.log(markJS);

        const keyword = $(this).val();
        $('section').unmark().mark(keyword);
    }); // end MarkJS
    

}); // ent jQuery
