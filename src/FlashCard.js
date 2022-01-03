import React, { useState } from "react";

function FlashCard({ flashCard }) {
    const [flip, setFlip] = useState(false);

    return (
        <div onClick={() => setFlip(!flip)}>
            {flip ? flashCard.answer : flashCard.question}
        </div>
    );
}

export default FlashCard;
