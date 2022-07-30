import { Container } from "./styles";
import logo from "../../assets/Logo.svg";
import InputSearch from "../InputSearch/Input";
function Header({ products, setFilteredProducts }) {
  return (
    <Container>
      <img src={logo} alt="" />
      <InputSearch
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
    </Container>
  );
}

export default Header;
