import "./card.css";

function Card({ name, tag, price, imageSrc, available }) {
  return (
    <div className="product-card">
      <img className="image" src={imageSrc} alt={name} />
      <h2>{name}</h2>
      <p className="tag">{tag}</p>
      <p>Prix : {price} €</p>
      <button>Ajouter</button>
      <p>{available}</p>

      <div>
        {available ? (
          <p> Produit en stock !</p>
        ) : (
          <p>Produit en rupture!</p>
        )}
      </div>
    </div>
  );
}

export default Card;
