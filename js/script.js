const quotes = document.getElementById("quote")
const author = document.getElementById("author")

const api_url = "https://dummyjson.com/quotes/random";

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);
    quotes.innerHTML = data.quote
    author.innerHTML = data.author
    
    
}
getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quotes.innerHTML + "---- by" + author.innerHTML ,"Tweet Window" , "width=600, height=300")
}