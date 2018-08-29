$(function(){

    $.getJSON('https://jsonplaceholder.typicode.com/posts',function(data) {
            // console.log(articles);
            console.log(data);
        

        for(let i = 0; i < data.length; i++){
            console.log(data[i]);
            
            $(`<section>
            <header>
            ${data[i].title}
            </header>
            <article>
            ${data[i].body}
            </article>
            </section>
            `).appendTo($('main'));
        }
    
    });
});