import React, { useEffect, useState } from 'react';
import Main from './components/Main';
import axios from 'axios';

interface defaultQuote  {
  text: string;
  author: string;
} 

const colors: string[] = ['#fca311', '#81b29a', '#4a4e69', '#00509d', '#e5383b', '#463f3a','#ff97b7','#0d1b2a', '#049a8f', '#ff8c61'];

const default_quote = {
  text: 'You do not rise to the level of your goals. You fall to the level of your systems.',
  author: 'James Clear',
}

const App: React.FC = () => {

  useEffect(() => {
      getQuotes();
  },[])

  const [quoteList, setQuoteList] = useState<any[]>([]);
  const [quote, setQuote] = useState<defaultQuote>(default_quote);
  const [isCopy, setIsCopy] = useState<boolean>(false);

  // Get Quotes from API
  const getQuotes = async () => {
    try {
        const quotes:any = await axios.get('https://type.fit/api/quotes');
        setQuoteList(quotes.data);
    } catch (e) {
        console.log(e)
    }
  }

  // Generate Quote
  const generateQuote = (): void => {
      setQuote(quoteList[Math.floor(Math.random() * quoteList.length)]);
      changeBackground();
      setIsCopy(false); 
  }

  // Change Background Color
  const changeBackground = (): void => {
      const setColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = setColor;
  }

  // Copy 
  const copyToClipboard = async () => {
    try {
        const copyText = `${quote.text} by ${quote.author}`;
        await navigator.clipboard.writeText(copyText);
        setIsCopy(true);
    } catch (e) {
        console.log(e)
    }
    
    // reset copy 
    setTimeout(() => {
      setIsCopy(false);
    }, 2000)
  }
 
  return ( 
    <Main quote={quote} changeBackground={changeBackground} generateQuote={generateQuote} copyToClipboard={copyToClipboard} isCopy={isCopy}/>
  );
}

export default App;
