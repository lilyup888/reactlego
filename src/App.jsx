import{ useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import List from "./components/List/List";
import Footer from "./Components/Footer/Footer";
import Basket from "./Components/basket/basket";


function App() {
  
  const [total, setTotal] = useState(0);

  const [articles, setArticles] = useState([]);


  



  return (
    <>
      <Header />
      <div className="container">
      <List total={total} onUpdateTotal={setTotal} articles={articles} onUpdateArticles={setArticles}  />
      <Basket total ={total} articles={articles}/>
      </div>
      <Footer />
    </>
  );
}

export default App;