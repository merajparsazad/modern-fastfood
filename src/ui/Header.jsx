import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">منو فستفود</Link>

      <SearchOrder />

      <p>معراج</p>
    </header>
  );
}

export default Header;
