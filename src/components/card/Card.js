import bookmarkImg from "../../assets/bookmark.png";
import bookmarkImgBlack from "../../assets/bookmark-black.png";
import "./Card.css";
import { useState } from "react";

export default function Card(props) {
  const [showAnswer, setShowAnswer] = useState(false);
  console.log(props);
  return (
    <li className="card__list-item explode-animation">
      <section className="card">
        <p className="card__question">{props.user.question}</p>
        <button 
        onClick = {() => setShowAnswer(previousShowAnswer => !previousShowAnswer)}
        className="card__answer-button">{showAnswer ? "Hide Answer" : "Show Answer"}</button>
        {
          showAnswer && <p className="card__answer">{props.user.answer}</p>
        }
        <ul className="card__tag-list">
          {
            // Use of implizit return. Immer das oberste Element braucht einen Key!
            props.user.tags.map((tag, index) => (
              <li key={index} className="card__tag-list-item">
                {tag}
              </li>
            ))
          }
        </ul>
        <inputus
          type="image"
          alt="bookmark icon"
          className="card__bookmark-icon"
          src={
            props.user.bookmarked ?  bookmarkImgBlack : bookmarkImg 
            }
          data-js="bookmark-button"
        />
      </section>
    </li>
  );
}
