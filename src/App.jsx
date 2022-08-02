import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { ToastContainer } from "react-toastify";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="App">
      <Header setFilteredProducts={setFilteredProducts} products={products} />
      <Main
        filteredProducts={filteredProducts}
        setProducts={setProducts}
        setCurrentSale={setCurrentSale}
        currentSale={currentSale}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
