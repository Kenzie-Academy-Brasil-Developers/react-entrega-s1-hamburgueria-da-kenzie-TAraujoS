import { LiCart } from "./styles";
import trash from "../../assets/trash.svg";

function CartProducts({ product, currentSale, setCurrentSale }) {
  const { id, img, name, category } = product;

  const removeItem = (id) => {
    const newList = currentSale.filter((element) => element.id !== id);
    setCurrentSale(newList);
  };

  return (
    <LiCart className="listedProduct">
      <img src={img} alt="" />
      <div>
        <p>{name}</p>
        <span>{category}</span>
      </div>
      <img
        className="trash"
        src={trash}
        onClick={() => removeItem(id)}
        alt="Lixeira"
      />
    </LiCart>
  );
}

export default CartProducts;
