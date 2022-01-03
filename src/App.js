import { useState } from "react";
import FlashCardList from "./FlashCardList";

function App() {
    const [flashCards, setFlashCards] = useState(STUB_FLASHCARDS);

    return <FlashCardList flashCards={flashCards} />;
}

const STUB_FLASHCARDS = [
    {
        id: 1,
        question: "Question 1",
        answer: "1",
        options: ["1", "2", "3", "4"],
    },
    {
        id: 2,
        question: "Question 2",
        answer: "2",
        options: ["1", "2", "3", "4"],
    },
    {
        id: 3,
        question: "Question 3",
        answer: "3",
        options: ["1", "2", "3", "4"],
    },
    {
        id: 4,
        question: "Question 4",
        answer: "4",
        options: ["1", "2", "3", "4"],
    },
];

export default App;
