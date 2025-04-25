import "./card.css";

function Card({ name, tag, price, imageSrc, available,total, onUpdateTotal, articles, onUpdateArticles }) {


const handleClick = () => {
 onUpdateTotal(total + price);
 onUpdateArticles ([...articles, name]); 
  };


  return (
    <div className="product-card">
      <img className="image" src={imageSrc} alt={name} />
      <h2>{name}</h2>
      <p className="tag">{tag}</p>
      <p>Prix : {price} €</p>
      <button onClick={handleClick}>Ajouter au panier</button>
      {available ? <p> Produit en stock !</p> : <p>Produit en rupture!</p>}
    </div>
  );
}

export default Card;


