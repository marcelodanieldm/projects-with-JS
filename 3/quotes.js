var arrayOfQuotes = [
    {
        author:"Dalai Lama",
        quote: "The purpose of our lives is to be happy."

    }
    ,
    {
        author:"John Lennon",
        quote: "Life is what happens when you’re busy making other plans."

    }

]

function randomSelector(arrayLenght){
    return Math.floor(Math.random() * arrayLenght);
}

function generateQuote(){
    var randomNumber = randomSelector(arrayOfQuotes.length);
    document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';
    document.getElementById("authorOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].author;

}