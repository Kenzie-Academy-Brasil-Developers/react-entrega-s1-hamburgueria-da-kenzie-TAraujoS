import CartProducts from "../CartProducts/CartProd";
import CartTotal from "../CartTotal/Total";

function Cart({ currentSale, setCurrentSale, cartTotal, setCartTotal }) {
  return (
    <section className="cartContainer">
      <h3>Carrinho de Compras</h3>
      <div>
        <ul className="cartList">
          {currentSale.length > 0 ? (
            currentSale.map((product) => {
              return (
                <CartProducts
                  key={product.id}
                  product={product}
                  setCurrentSale={setCurrentSale}
                  currentSale={currentSale}
                />
              );
            })
          ) : (
            <div className="cleanCart">
              <h2>Carrinho Vazio</h2>
              <p>Adicione Itens</p>
            </div>
          )}
        </ul>
      </div>
      <div className="divCartTotal">
        <CartTotal
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
        />
      </div>
    </section>
  );
}

export default Cart;
