import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div>
      <p>
        <span>23 پیتزا</span>
        <span>$23.23</span>
      </p>
      <Link to="/cart">سبد خرید &rarr;</Link>
    </div>
  );
}

export default CartOverview;
