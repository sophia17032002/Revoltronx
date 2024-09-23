import React, { useState } from "react";
import "./SearchResults.css";

const SearchResults = ({ results, isLoading }) => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="results-container">
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        results.map((result, index) => (
          <div
            key={index}
            className={`result-card ${flippedIndex === index ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
            <div className="card-inner">
              <div className="card-front">
                <h3>{result.title}</h3>
                <p className="flip-prompt">Click to flip for more details</p>
                <div className="result-tags">
                  <span className="tag">{`Type:  ${result.type  || 0}`}</span>
                  <span className="tag">{`Views: ${result.views || 0}`}</span>
                  <span className="tag">{`Likes: ${result.likes || 0}`}</span>
                </div>
              </div>
              <div className="card-back">
                <p>More details about the content can go here.</p>
                <button onClick={() => window.open(result.link, "_blank")}>
                  Open Link
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResults;
