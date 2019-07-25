/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


// Array named "quotes" of objects of quotes from different sources
let quotes = [
  {
    quote: "Learning is a journey. View missteps as an opportunity to learn and move forward.",
    source: "Emily Schweiss",
    citation: "Blog",
    year: 2017,
    tag: "#coding-positivity"
  },
  {
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    source: "Elon Musk",
    tag: "#technology"
    },
  {
    quote: "The seed must grow regardless of the fact that it’s planted in stone.",
    source: "Tupac Shakur",
    tag: "#modern-day-philosopher"
  },
  {
    quote: "By giving people the power to share, we're making the world more transparent.",
    source: "Mark Zuckerberg",
    citation: "Facebook",
    tag: "#genius"
  },
  {
    quote: "Great achievers are driven, not so much by the pursuit of success but by the fear of failure.",
    source: "Larry Ellison",
    citation: "Oracle",
    tag: "#motivated"
  },
  {
    quote: "You don’t have to thank me. I absorbed you. We’re practically related.",
    source: "Captain Marvel",
    citation: "Captain Marvel Vol 7 #8",
    year: 2017
  }
];

//this function generates a random quote from the quotes array
function getRandomQuote() {
  //this variable holds a randomized quote
  let randomNumber = quotes[Math.floor(Math.random() * quotes.length)];
  return randomNumber;
}

//this function sets a random value to the red, blue, and green colors
function randomColor() {
  //sets x, y, and z to random number from 0 to 256
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    //this variable holds the string of the rgb value
    let color = "rgb(" + x + "," + y + "," + z + ")";

    //sets the body of the html file to the a random color
    document.body.style.backgroundColor = color;
    //the buttons color changes to the same random color as the body
    document.getElementById('loadQuote').style.background = color;
}

//after 20 seconds a new quote will be printed to the screen
function changeQuote() {
  let change = window.setInterval(printQuote, 20000);
  return change;
}

//this function is responsible for printing the quote to the page
function printQuote() {
  //calls the getRandomQuote function
  let randQuote = getRandomQuote();
  let addElement;
  let text;
  let next;
  let span = document.createElement('SPAN');
  let htmlString = "";
  //Adds the quote and source to the html page
  htmlString += '<p class="quote">' + randQuote.quote + '</p>';
  htmlString += '<p class="source">' + randQuote.source;
  //If the quote has a key: citation a span element will appear in the string
  if(randQuote.citation) {
    htmlString += '<span class="citation">' + randQuote.citation + '</span>';
  }
  //If the quote has a key: year a span element will appear in the string
  if(randQuote.year) {
    htmlString += '<span class="year">' + randQuote.year + '</span>';
  }
  if(randQuote.tag) {
    htmlString += span.innerHTML = ", " + randQuote.tag;
    document.getElementById("quote-box").appendChild(span);
  }
  htmlString += '</p>';
  //sets the div element with id "quote-box" to the string above
  document.getElementById("quote-box").innerHTML = htmlString;
  //calls the randomColor function
  randomColor();
}

 //calls the changeQuote function
 changeQuote();

//allows the button tag to change the quote when clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);