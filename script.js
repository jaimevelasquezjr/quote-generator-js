'use-strict';

const quoteContainer = document.querySelector('#quote-container');
const btnNewQuote = document.querySelector('#new-quote');
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const btnTwitter = document.querySelector('#twitter');
const loader = document.querySelector('#loader');

let getQuote = [];

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

function randomQuote() {
  loading();
  setTimeout(() => {
    getQuote = localQuotes[Math.trunc(Math.random() * localQuotes.length)];

    if (!getQuote.author) {
      author.textContent = 'Unknown';
    } else {
      author.textContent = getQuote.author;
    }

    // Check quote length
    if (getQuote.text.length > 50) {
      quote.classList.add('long-quote');
    } else {
      quote.classList.remove('long-quote');
    }

    quote.textContent = getQuote.text;
    complete();
  }, 1000);
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${getQuote.text} - ${getQuote.author}`;
  window.open(twitterUrl, '_blank');
}

btnNewQuote.addEventListener('click', randomQuote);
btnTwitter.addEventListener('click', tweetQuote);

randomQuote();
