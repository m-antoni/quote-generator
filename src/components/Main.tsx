import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Main () {

    useEffect(() => {
        getQuotes();
    },[])

    const quoteDefault = {
        text: 'You do not rise to the level of your goals. You fall to the level of your systems.',
        author: 'James Clear'
    } 

    const [quote, setQuote] = useState(quoteDefault);
    const [quoteList, setQuoteList] = useState([]);

    const getQuotes = async () => {
        try {
            const quotes:any = await axios.get('https://type.fit/api/quotes');
            setQuoteList(quotes.data);
        } catch (e) {
            console.log(e)
        }
    }


    const generateQuote = () => {
        setQuote(quoteList[Math.floor(Math.random() * quoteList.length)]);
    }
 
    return (
        <div className="container">
            <a href="#" onClick={generateQuote} className="btn-quote">GET QUOTE</a>

            <div className="q-container">
                <div className="q-text">{quote.text}</div>
                <div className="q-author">~ {quote.author} ~</div>
            </div>
        </div>
    )
}

export default Main
