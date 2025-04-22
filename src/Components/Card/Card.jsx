import "./card.css";

function Card() {
  const name = "Titanic";
  const tag = "Historique";
  const price = 199.99;
  const imageSrc =
    "https://www.lego.com/cdn/cs/set/assets/blt6cdf0b53146b5519/10294_Prod.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1";

  return (
    <div className="product-card">
      <img src={imageSrc} alt={name} />
      <h2>{name}</h2>
      <p className="tag">{tag}</p>
      <p>Prix : {price} €</p>
      <button>Ajouter</button>
    </div>
  );
}
export default Card;