import Products from "../Products";
import { Section } from "./styles";

function ProductsList({
  filteredProducts,
  setProducts,
  setCurrentSale,
  currentSale,
}) {
  return (
    <Section>
      <ul>
        {filteredProducts.map((product) => (
          <Products
            key={product.id}
            product={product}
            setProducts={setProducts}
            filteredProducts={filteredProducts}
            setCurrentSale={setCurrentSale}
            currentSale={currentSale}
          />
        ))}
      </ul>
    </Section>
  );
}

export default ProductsList;
