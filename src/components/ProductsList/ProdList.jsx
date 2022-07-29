import Products from "../Products/Products";

function ProductsList({ products, setProducts, setCurrentSale, currentSale }) {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            setProducts={setProducts}
            products={products}
            setCurrentSale={setCurrentSale}
            currentSale={currentSale}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
