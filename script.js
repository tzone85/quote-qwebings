let apiQuotes = [];

// Show New Quote
function newQuote(){
    // pick a random quote from an apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    // for making use of the local quotes file
    // const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote); 
}

// Get Quotes from API
async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here in some alert or UI element. e.g. alert(error)
    }
}


//  On Load
getQuotes();