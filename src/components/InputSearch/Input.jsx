import { FormInput } from "./styles";

function InputSearch({ setFilteredProducts, products }) {
  function showProducts(item) {
    const filterProd = products.filter(
      (product) =>
        product.name.toLowerCase().includes(item.toLowerCase()) ||
        product.category.toLowerCase().includes(item.toLowerCase())
    );
    setFilteredProducts(filterProd);
  }
  return (
    <FormInput>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(event) => showProducts(event.target.value)}
      />
      <button
        onClick={(event) => {
          showProducts(event.target.value);
          event.preventDefault();
        }}
      >
        Pesquisar
      </button>
    </FormInput>
  );
}
export default InputSearch;
