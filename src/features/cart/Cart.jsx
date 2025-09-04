import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import styled from "styled-components";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

const StyledCart = styled.div`
  padding: 16px 12px;

  & h2 {
    margin-top: 30px;
    font-size: 20px;
    font-weight: 500;
  }

  & ul {
    margin-top: 12px;
  }

  & > div {
    display: flex;
    gap: 0 8px;
    margin-top: 25px;
  }
`;

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <StyledCart>
      <LinkButton to="/menu">&larr; برگشت به منو</LinkButton>

      <h2>سبد خرید, {username}</h2>

      <ul>
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div>
        <Button to="/order/new">سفارش</Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          پاک کردن
        </Button>
      </div>
    </StyledCart>
  );
}

export default Cart;
