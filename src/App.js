//import logo from './logo.svg';
import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
//import Card from "./components/card/Card";
import Cards from "./pages/Cards";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import { useState } from "react";

const cards = [
  {
    id: 1,
    question: "Warum?",
    answer: "Warum nicht?",
    tags: ["HTML", "CSS"],
    bookmarked: false,
  },
  {
    id: 2,
    question: "Ist Milch oder Kaffee besser?",
    answer: "Mal so, mal so?",
    tags: ["HTML", "CSS", "Human Ressources"],
    bookmarked: true,
  },
  {
    id: 3,
    question: "Milch oder Milchschaum?",
    answer: "Keine Ahnung!",
    tags: ["HTML", "Joy"],
    bookmarked: false,
  },
  {
    id: 4,
    question: "Warum ist die Banane krumm?",
    answer: "EURO Norm 32153.22.33!",
    tags: ["HTML", "Fruits", "CSS"],
    bookmarked: true,
  },
  {
    id: 5,
    question: "Erst die Henne oder erst das Ei?",
    answer: "Hmmmmm?",
    tags: ["HTML", "CSS", "Human Ressources"],
    bookmarked: false,
  },
  {
    id: 6,
    question: "Wer wird Deutscher Meister?",
    answer: "Entenhausen!",
    tags: ["HTML", "CSS", "Disney"],
    bookmarked: true,
  },
];
function App() {
  const [activeSite, setActiveSite] = useState("home");
console.log(activeSite);
  return (
    <div className="App container">
      <Header />
      <main className="main">
        {activeSite === 'home' && <Cards cards={cards} />}
        {activeSite === 'bookmark' && <Cards cards={cards.filter(card => {return card.bookmarked})} />}
        {activeSite === 'create' && <Create />}
        {activeSite === 'profile' && <Profile  />}
      </main>
      <Navigation
        activeSite={activeSite}
        onChange={(site) => {
          setActiveSite(site);
        }}
      />
    </div>
  );
}

export default App;
