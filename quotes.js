// Floating quotes
const quotes = [
    '"every set back is a set up for greater thing" – Anais',
    '"les fous ne marchent pas avec les sages" – Anais',
    '"live love laugh wicked" – Anais',
    '"we can only be wicked together" – Anais'
];

function scatterQuotes() {
    const container = document.getElementById('quoteContainer');
    if (!container) return;

    quotes.forEach(quote => {
        const quoteElement = document.createElement('div');
        quoteElement.className = 'floating-quote';
        quoteElement.textContent = quote;
        quoteElement.style.left = `${Math.random() * 80 + 10}%`;
        quoteElement.style.top = `${Math.random() * 80 + 10}%`;
        container.appendChild(quoteElement);
    });
}

window.addEventListener('load', scatterQuotes);
