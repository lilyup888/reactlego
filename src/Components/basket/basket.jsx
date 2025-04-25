import "./basket.css";


function Basket({ total, articles }) {
  return (
    <div className="basket">
      <h1>Panier</h1>
     {!total ? <p>Votre panier est vide</p> : <p>Total de votre panier {total}Euros</p>}
     <ul>
      {articles.map((article, index) => (
        <li key={index}  >{article}</li>
      ))}
    </ul>
      
    </div>
  );
}

export default Basket;


