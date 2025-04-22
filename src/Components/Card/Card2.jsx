function Card2() {
    const name = "Millennium Falcon";
    const tag = "Star Wars";
    const price = 299.99;
    const imageSrc =
      "https://www.lego.com/cdn/cs/set/assets/blt3349f56c6f192e18/75192_Prod.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1";
  
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
  
  export default Card2;
  