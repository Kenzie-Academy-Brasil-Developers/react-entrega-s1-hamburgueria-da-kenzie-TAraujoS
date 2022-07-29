function CartProducts({ product, currentSale, setCurrentSale }) {
  const { id, img, name, category } = product;

  const removeItem = (id) => {
    const newList = currentSale.filter((element) => element.id !== id);
    setCurrentSale(newList);
  };

  return (
    <li className="listedProduct">
      <img src={img} alt="" />
      <div>
        <p>{name}</p>
        <span>{category}</span>
        <span> </span>
      </div>
      <button onClick={() => removeItem(id)}>Remover</button>
    </li>
  );
}

export default CartProducts;
