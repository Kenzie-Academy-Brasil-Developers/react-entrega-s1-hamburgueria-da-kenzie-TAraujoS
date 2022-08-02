import CartProducts from "../CartProducts";
import CartTotal from "../CartTotal";
import { Aside } from "./styles";

function Cart({ currentSale, setCurrentSale }) {
  return (
    <Aside>
      <h3>Carrinho de Compras</h3>
      <div className="cartContainer">
        <ul className="cartList">
          {currentSale.length ? (
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
              <h2>Sua sacola esta vazia</h2>
              <p>Adicione Itens</p>
            </div>
          )}
        </ul>
      </div>
      {currentSale.length > 0 && (
        <CartTotal setCurrentSale={setCurrentSale} currentSale={currentSale} />
      )}
    </Aside>
  );
}

export default Cart;
