import "./card.css";

function Card({ name, tag, price, imageSrc }) {
  return (
    <div className="product-card">
      <img className="image" src={imageSrc} alt={name} />
      <h2>{name}</h2>
      <p className="tag">{tag}</p>
      <p>Prix : {price} €</p>
      <button>Ajouter</button>
    </div>
  );
}


export default Card;