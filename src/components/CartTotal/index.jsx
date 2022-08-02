import { TotalDiv } from "./styles";

function CartTotal({ setCurrentSale, currentSale }) {
  const sumTotal = currentSale
    .reduce((acc, current) => acc + current.price, 0)
    .toFixed(2);

  return (
    <TotalDiv>
      <h4>Total:</h4>
      <p>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(sumTotal)}
      </p>
      <button onClick={() => setCurrentSale([])}>Remover Todos</button>
    </TotalDiv>
  );
}

export default CartTotal;
