import ProductsList from "../ProductsList";
import Cart from "../Cart/Cart";
import { ContainerMain } from "./styles";

function Main({ filteredProducts, setProducts, setCurrentSale, currentSale }) {
  return (
    <ContainerMain>
      <ProductsList
        filteredProducts={filteredProducts}
        setProducts={setProducts}
        setCurrentSale={setCurrentSale}
        currentSale={currentSale}
      />
      <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
    </ContainerMain>
  );
}

export default Main;
