//import logo from './logo.svg';
import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Card from "./components/card/Card";


function App() {
  return (
    <div className="App container">
      <Header />
      <main className="main">
        <ul className="card__list grid-container" data-js="card-list">
          <Card />
          <Card />
          <Card />
        </ul>
      </main>
      <Navigation />
    </div>
  );
}

export default App;
