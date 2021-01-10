import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Main () {

    useEffect(() => {
        getQuotes();
    },[])

    const colors: string[] = ['#fca311', '#81b29a', '#4a4e69', '#00509d', '#e5383b', '#463f3a','#ff97b7','#0d1b2a', '#049a8f', '#ff8c61'];

    const defaultData = {
        text: 'You do not rise to the level of your goals. You fall to the level of your systems.',
        author: 'James Clear',
    } 

    const [quote, setQuote] = useState(defaultData);
    const [quoteList, setQuoteList] = useState([]);

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
    }

    // Change Background Color
    const changeBackground = (): void => {
        const setColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = setColor;
    }
 
    return (
        <div className="container">
            <button onClick={generateQuote} className="btn-quote">GET QUOTE</button>
            <div className="q-container">
                <div className="q-text">{quote.text}</div>
                <div className="q-author">~ {quote.author ? quote.author : 'Unknown author'} ~</div>
            </div>
        </div>
    )
}

export default Main
