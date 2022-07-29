import logo from "../../assets/Logo.svg";
import InputSearch from "../InputSearch/Input";
function Header({ filteredProducts, setFilteredProducts, showProducts }) {
  return (
    <header>
      <img src={logo} alt="" />
      <InputSearch
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        showProducts={showProducts}
      />
    </header>
  );
}

export default Header;
