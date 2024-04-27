let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: "Every child is an artist; the problem is staying an artist when you grow up.",
    person: "Pablo Picasso"
}, {
    quote: "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.",
    person: "Scott Adams"
}, {
    quote: "Every artist was first an amateur.",
    person: "Ralph Waldo Emerson"
}, {
    quote: "I found I could say things with color and shapes that I couldn’t say any other way – things I had no words for.",
    person: "Georgia O’Keeffe"
}, {
    quote: "There is no must in art because art is free.",
    person: "Wassily Kandinsky"
}, ];

btn.addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    quote.innerText = quotes[randomNumber].quote;
    person.innerText = quotes[randomNumber].person;
})