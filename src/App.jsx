import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProdList";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const showProducts = (inputValue) => {
    const filterProd = products.filter((product) => {
      return (
        inputValue === product.name.toLowerCase() ||
        inputValue === product.category.toLowerCase()
      );
    });
    setFilteredProducts(filterProd);
  };

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        showProducts={showProducts}
      />
      <ProductsList
        products={products}
        setProducts={setProducts}
        setCurrentSale={setCurrentSale}
        currentSale={currentSale}
      />
      <Cart
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
      />
    </div>
  );
}

export default App;
