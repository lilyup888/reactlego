import Card from "../Card/Card";
import products from "../../Data/product";
import "./List.css";
import CheckboxExample from "../Checkbox/Checkbox";



function List({ total, onUpdateTotal, articles, onUpdateArticles, showElements, onUpdateshowElements }) {
  return (
    <div className="product-list">
     
        {products.map((card, index) => (
          <Card key={index} name={card.name} tag={card.tag} price={card.price} imageSrc={card.imageSrc} available={card.available} total={total} onUpdateTotal={onUpdateTotal} articles={articles} onUpdateArticles={onUpdateArticles}  showElements={showElements} onUpdateshowElements={onUpdateshowElements} />
        ))}
    

      
    </div>
  );
}

export default List;
