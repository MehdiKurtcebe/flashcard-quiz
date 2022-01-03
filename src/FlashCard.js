import React, { useState } from "react";

function FlashCard({ flashCard }) {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`flashCard ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      {!flip ? (
        <div className="flashCard-front">
          {flashCard.question}
          <div className="flashCard-options">
            {flashCard.options.map((option) => {
              return <div className="flashCard-option">{option}</div>;
            })}
          </div>
        </div>
      ) : (
        <div className="flashCard-back">{flashCard.answer}</div>
      )}
    </div>
  );
}

export default FlashCard;
