import React from "react";
import FlashCard from "./FlashCard";

function FlashCardList({ flashCards }) {
  return (
    <div className="flashCards-grid">
      {flashCards.map((flashCard) => {
        return <FlashCard flashCard={flashCard} key={flashCard.id} />;
      })}
    </div>
  );
}

export default FlashCardList;
