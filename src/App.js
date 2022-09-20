//import logo from './logo.svg';
import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Card from "./components/card/Card";

const cards = [
  {
    id: 1,
    question: "Warum?",
    answer: "Warum nicht?",
    tags: ["HTML", "CSS"],
  },
  {
    id: 2,
    question: "Ist Milch oder Kaffee besser?",
    answer: "Mal so, mal so?",
    tags: ["HTML", "CSS", "Human Ressources"],
  },
  {
    id: 3,
    question: "Milch oder Milchschaum?",
    answer: "Keine Ahnung!",
    tags: ["HTML", "Joy"],
  },
  {
    id: 4,
    question: "Warum ist die Banane krumm?",
    answer: "EURO Norm 32153.22.33!",
    tags: ["HTML", "Fruits", "CSS"],
  },
  {
    id: 5,
    question: "Ist Milch oder Kaffee besser?",
    answer: "Mal so, mal so!",
    tags: ["HTML", "CSS", "Human Ressources"],
  },
];
function App() {
  return (
    <div className="App container">
      <Header />
      <main className="main">
        <ul className="card__list grid-container">
          {/* {
            cards.map(card => {
              return(
                <Card key={card.id} question={card.question} answer={card.answer} tags={card.tags} />
              )
            })
          } */}
          { // Destructuring des einzelnen card-Objektes und Implizites Return
            cards.map(({id, question, answer, tags}) => <Card key={id} question={question} answer={answer} tags={tags} />
            )
          }
          
          {/* <Card question="Wie lang ist eine Currywurst?" answer="0,135 Zoll" tags={['#HTML','#CSS','#JS']}/>
          <Card question="Wer wird Deutscher Meister?" answer="FC Kamen-Methler" tags={['#HTML','#C++','#JS']}/>
          <Card question="Was ist der Sinn des Lebens?" answer="48" tags={['#HTML','#CSS','#YOGA','Meditation']}/> */}
        </ul>
      </main>
      <Navigation />
    </div>
  );
}

export default App;
