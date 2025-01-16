document.getElementById('quoteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputText = document.getElementById('inputText').value;
    const quotes = extractQuotes(inputText);
    displayQuotes(quotes);
});

function extractQuotes(text) {
    const regex = /"([^"]*)"/g;
    let matches;
    const quotes = [];
    while ((matches = regex.exec(text)) !== null) {
        quotes.push(matches[1]);
    }
    return quotes;
}

function displayQuotes(quotes) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    if (quotes.length > 0) {
        quotes.forEach(quote => {
            const p = document.createElement('p');
            p.textContent = quote;
            resultDiv.appendChild(p);
        });
    } else {
        resultDiv.textContent = 'No quotes found.';
    }
}

document.getElementById('copyButton').addEventListener('click', function() {
    const resultDiv = document.getElementById('result');
    const quotesText = Array.from(resultDiv.children).map(p => p.textContent).join('\n');
    navigator.clipboard.writeText(quotesText).then(function() {
        alert('Quotes copied to clipboard!');
    }).catch(function(err) {
        alert('Failed to copy quotes.');
    });
});