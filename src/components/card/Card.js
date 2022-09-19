import bookmarkImg from "../../assets/bookmark.png"
import "./Card.css";

export default function Card() {
  return (
    <li className="card__list-item explode-animation">
      <section className="card">
        <p className="card__question">Question</p>
        <button class="card__answer-button">
          Show Answer
        </button>
        <p className="card__answer">Answer</p>
        <ul className="card__tag-list">
          <li className="card__tag-list-item">
            <button>#HTML</button>
          </li>
        </ul>
        <input
          type="image"
          alt="bookmark icon"
          class="card__bookmark-icon"
          src={bookmarkImg}
          data-js="bookmark-button"
        />
      </section>
    </li>
  );
}
