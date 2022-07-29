function InputSearch({ filteredProducts, setFilteredProducts, showProducts }) {
  return (
    <div>
      <input
        type="text"
        value={filteredProducts}
        required
        className="descriptionInput"
        placeholder="Digitar Pesquisa"
        onChange={(event) => setFilteredProducts(event.target.value)}
      />
      <button onClick={() => showProducts(filteredProducts)}>Pesquisar</button>
    </div>
  );
}
export default InputSearch;
