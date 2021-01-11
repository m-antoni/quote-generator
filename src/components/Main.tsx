import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Props {
    colors: string[];
    default_quote: {
        text: string,
        author: string
    };
}

const Main: React.FC<Props> = ({ colors, default_quote }) => {

    useEffect(() => {
        getQuotes();
    },[])

    const [quote, setQuote] = useState<Props['default_quote']>(default_quote);
    const [quoteList, setQuoteList] = useState<any[]>([]);

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

    // Copy 
    const copyToClipboard = ():void => {
        // const el = this.textArea
        // el.select()
        // document.execCommand("copy")
        // this.setState({copySuccess: true})
        console.log('Copy')
    }
 
    return (
        <div className="container">
            <button onClick={generateQuote} className="btn-quote">GET QUOTE</button>
            <div className="q-container">
                <div className="q-copy" onClick={copyToClipboard}><i className="fa fa-copy"></i></div>
                <div className="q-text">"{quote.text}"</div>
                <div className="q-author">~ {quote.author ? quote.author : 'Unknown'} ~</div>
            </div>
        </div>
    )
}

export default Main
