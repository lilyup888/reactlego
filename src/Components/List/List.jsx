
import{ useState } from "react";
import Card from "../Card/Card";
import products from "../../Data/product";
import "./List.css";
import CheckboxExample from "../Checkbox/Checkbox";

function List({
  total,
  onUpdateTotal,
  articles,
  onUpdateArticles
}) {
  const [showElements, setshowElements] = useState(true);
  return (
    <div className="product-list">
      {products.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          tag={card.tag}
          price={card.price}
          imageSrc={card.imageSrc}
          available={card.available}
          total={total}
          onUpdateTotal={onUpdateTotal}
          articles={articles}
          onUpdateArticles={onUpdateArticles}
         
        />
      ))}

      <CheckboxExample 
       showElements={showElements}
       onUpdateshowElements={setshowElements}
      
      />
    </div>
  );
}

export default List;
