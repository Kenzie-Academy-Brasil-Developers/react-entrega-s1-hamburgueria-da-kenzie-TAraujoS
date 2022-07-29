function CartTotal({ cartTotal, setCartTotal, setCurrentSale, currentSale }) {
  const removeAll = () => {
    setCurrentSale([]);
  };

  const sumTotal = currentSale
    .reduce((acc, current) => acc + current.price, 0)
    .toFixed(2);

  return (
    <div className="cartTotal">
      <h3>Total</h3>
      <p>{sumTotal}</p>
      <button onClick={() => removeAll}>Remover Todos</button>
    </div>
  );
}

export default CartTotal;
