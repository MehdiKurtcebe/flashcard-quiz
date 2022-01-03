import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { decode } from "he";
import "./app.css";
import FlashCardList from "./FlashCardList";

function App() {
  const [flashCards, setFlashCards] = useState([]);
  const [categories, setCategories] = useState([]);

  const categoryEl = useRef();
  const qAmountEl = useRef();

  // Gets all categories and some random questions in beginning
  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10").then((res) => {
      setFlashCards(parseQuestions(res));
    });

    axios.get("https://opentdb.com/api_category.php").then((res) => {
      setCategories(res.data.trivia_categories);
    });
  }, []);

  // Parses API response and returns array of questions
  function parseQuestions(res) {
    return res.data.results.map((item, index) => {
      const answer = decode(item.correct_answer);
      const options = [...item.incorrect_answers.map((a) => decode(a)), answer];

      return {
        id: `${index}-${Date.now()}`,
        question: decode(item.question),
        answer: answer,
        options: options.sort(() => Math.random() - 0.5),
      };
    });
  }

  // Gets questions according to form inputs
  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("https://opentdb.com/api.php", {
        params: {
          amount: qAmountEl.current.value,
          category: categoryEl.current.value,
        },
      })
      .then((res) => {
        setFlashCards(parseQuestions(res));
      });
  };

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="qAmount">Number of Questions</label>
          <input
            type="number"
            id="qAmount"
            min="1"
            step="1"
            defaultValue={10}
            ref={qAmountEl}
          />
        </div>

        <div className="form-group">
          <button className="submitBtn">Generate</button>
        </div>
      </form>

      <div className="container">
        <FlashCardList flashCards={flashCards} />
      </div>
    </>
  );
}

export default App;
