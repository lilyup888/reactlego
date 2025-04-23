import Card from "../Card/Card";

import "./List.css";
import products from "../../data/product";

function Item({ text }) {
  return <li>{text}</li>;
}

function List() {
  
  return (
    <div className="product-list">
      <ul>
        {products.map((card, index) => (
          <Card key={index} name={card.name} tag={card.tag} price={card.price} imageSrc={card.imageSrc}/>
        ))}
      </ul>

      {/* <Card 
        name="Titanic" 
        tag="Historique" 
        price="199.99"
        imageSrc= "https://www.lego.com/cdn/cs/set/assets/blt6cdf0b53146b5519/10294_Prod.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1"
      />
      <Card 
        name="Millenium Falcon" 
        tag="Star Wars"
        price="299.99" 
        imageSrc="https://www.lego.com/cdn/cs/set/assets/blt3349f56c6f192e18/75192_Prod.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1"
      />
      <Card 
        name="Nuit étoilée de Van Gogh"
        tag="Art"
        price="169.99" 
        imageSrc="https://www.lego.com/cdn/cs/set/assets/blt3349f56c6f192e18/75192_Prod.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1"
      /> */}
    </div>
  );
}

export default List;
