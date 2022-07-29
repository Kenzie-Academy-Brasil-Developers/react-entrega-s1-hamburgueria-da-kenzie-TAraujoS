function Products({ product, currentSale, products, setCurrentSale }) {
  const { id, img, name, category, price } = product;

  const handleClick = (id) => {
    const addProduct = products.find((element) => element.id === id);
    setCurrentSale([...currentSale, addProduct]);
  };

  return (
    <li>
      <img src={img} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{category}</p>
        <span>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </span>
      </div>
      <button onClick={() => handleClick(id)}>Adicionar</button>
    </li>
  );
}

export default Products;
