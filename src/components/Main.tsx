import React from 'react';

interface Props {
    quote: { text: string, author: string };
    isCopy: boolean;
    changeBackground: () => void;
    generateQuote: () => void;
    copyToClipboard: () => void;
}

const Main: React.FC<Props> = ({ quote, generateQuote, copyToClipboard, isCopy }) => {
    return (
        <div className="container">
            { isCopy && <div className="copy-message"><i className="fa fa-check"></i> Quote Copied!</div>  }

            <div className="q-container">
                <div className="copy-btn" onClick={!isCopy ? copyToClipboard : () => {}}><i className="fa fa-copy"></i></div>
                <div className="q-text wow slideInUp">"{quote.text}"</div>
                <div className="q-author wow slideInRight">~ {quote.author ? quote.author : 'Unknown'} ~</div>
            </div>

            <button onClick={generateQuote} className="btn-quote wow zoomIn">GET QUOTE</button>
        </div>
    )
}

export default Main