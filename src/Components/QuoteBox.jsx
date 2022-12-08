import React from 'react'
import "./QuoteBox.scss"
import Button from "react-bootstrap/Button"
import {FaTwitter,FaQuoteLeft} from "react-icons/fa"

const QuoteBox = ({ accentColor, handleNewQuote, currentQuote }) => {
    const { quote, author } = currentQuote;
    return (
      <div
        id="quote-box"
        className="quote-box"
        style={{ backgroundColor: "white" }}
      >
        <div className="quote-text">
          <FaQuoteLeft className="quote-mark" />
          <span id="text" className="quote">
            {quote}
          </span>
        </div>
        <div className="quote-author">
          <span id="author">-{author}</span>
        </div>
        <div className="buttons">
          <Button
            id="tweet-quote"
            className="quote-btn transition"
            style={{ backgroundColor: `${accentColor}`, color:"white" }}
            href={`https://twitter.com/intent/tweet?text=${quote}-${author}&hashtags=quote`}
          >
            <FaTwitter />
          </Button>
          <Button
            id="new-quote"
            className="quote-btn transition"
            onClick={() => handleNewQuote()}
            style={{ backgroundColor: `${accentColor}`,color:"white" }}
          >
            New Quote
          </Button>
        </div>
      </div>
    );
  };
  
  export default QuoteBox;
  