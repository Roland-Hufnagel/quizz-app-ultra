import Card from "../components/card/Card";

export default function Cards(props) {
    //console.log(props);
  return (
    <ul className="card__list grid-container">
      {props.cards.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </ul>
  );
}
