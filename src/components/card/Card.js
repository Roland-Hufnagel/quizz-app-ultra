import bookmarkImg from "../../assets/bookmark.png"
import "./Card.css";



export default function Card({question, answer, tags}) {
  return (
    <li className="card__list-item explode-animation">
      <section className="card">
        <p className="card__question">{question}</p>
        <button className="card__answer-button">
          Show Answer
        </button>
        <p className="card__answer">{answer}</p>
        <ul className="card__tag-list">
          
            {// Use of implizit return. Immer das oberste Element braucht einen Key!
              tags.map((tag, index) =>  <li key={index} className="card__tag-list-item"><button  >{tag}</button></li>
              )
            }
            
          
        </ul>
        <input
          type="image"
          alt="bookmark icon"
          className="card__bookmark-icon"
          src={bookmarkImg}
          data-js="bookmark-button"
        />
      </section>
    </li>
  );
}
