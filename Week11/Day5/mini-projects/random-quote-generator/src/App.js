import React, {useState} from 'react';
import './App.css';
import quotes from './QuotesDatabase';


function App() {


  // get random quote
  const randomQuote = () => {
    let randomNum

    // avoid repeting
    do {
      randomNum = Math.floor(Math.random() * quotes.length)
    } while (randomNum === currentQuoteIndex)
    currentQuoteIndex = randomNum
    const quote = quotes[randomNum] 
    
    // put anonymous author
    if (!quote.author){
      quote.author = 'Anonymous Author'
    }
    return quote
  }

  // get random hex color
  const randomColor = () => {
    const min = parseInt('000000', 16);
    const max = parseInt('FFFFFF', 16);
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    const randomHexColor = '#'+randomNumber.toString(16).padStart(6, '0').toUpperCase();
    return randomHexColor;
  }

  // new quote button handler
  const newQuote = () => {
    setQuote(randomQuote())
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    setColor(newColor);
  }

  let currentQuoteIndex = -1 // set current quote number to avoid repeating
  const [quote, setQuote] = useState(randomQuote()); // quote state
  const [color, setColor] = useState(randomColor()); // color state
  document.body.style.backgroundColor = color;

  return (
    <div className="App"  >
      <div className="quotebox" >
        <div className="fadeIn" key={color}>
          <h1 id='quote' style={{color:color}}>
            "{quote.quote}"
          </h1>
          <h5 id='author' style={{color:color}}>
          -{quote.author}-
          </h5>
          <button onClick={newQuote} id='newquote' style={{backgroundColor:color}}>
            New quote
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;
