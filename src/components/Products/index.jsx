import { ListProducts } from "./styles";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Products({ filteredProducts, product, currentSale, setCurrentSale }) {
  const { id, img, name, category, price } = product;

  const handleClick = (id) => {
    const addProduct = filteredProducts.find((element) => element.id === id);
    if (!currentSale.includes(addProduct)) {
      setCurrentSale([...currentSale, addProduct]);
      toast.success("Produto adicionado", {
        autoClose: 2000,
      });
    } else {
      toast.error("Produto já foi adicionado!", {
        autoClose: 2000,
      });
    }
  };

  return (
    <ListProducts>
      <figure>
        <img src={img} alt="" />
      </figure>
      <div>
        <h2>{name}</h2>
        <p>{category}</p>
        <span>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </span>
        <button onClick={() => handleClick(id)}>Adicionar</button>
      </div>
    </ListProducts>
  );
}

export default Products;
