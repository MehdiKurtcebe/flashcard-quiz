import { useState, useEffect } from "react";
import axios from "axios";
import {decode} from "he";
import "./app.css";
import FlashCardList from "./FlashCardList";

function App() {
  const [flashCards, setFlashCards] = useState(STUB_FLASHCARDS);

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10").then((res) => {
      setFlashCards(
        res.data.results.map((item, index) => {
          const answer = decode(item.correct_answer);
          const options = [...item.incorrect_answers.map(a => decode(a)), answer];
          return {
            id: `${index}-${Date.now()}`,
            question: decode(item.question),
            answer: answer,
            options: options.sort(() => Math.random() - 0.5),
          };
        })
      );
    });
  }, []);

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
