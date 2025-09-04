import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import styled from "styled-components";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "مدیترانه‌ای",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "سبزیجات",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "قارچ و اسفناج",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

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
  const cart = fakeCart;
  console.log(cart);

  return (
    <StyledCart>
      <LinkButton to="/menu">&larr; برگشت به منو</LinkButton>

      <h2>سبد خرید, اسم یوزر</h2>

      <ul>
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div>
        <Button to="/order/new">سفارش</Button>
        <Button type="secondary">پاک کردن</Button>
      </div>
    </StyledCart>
  );
}

export default Cart;
