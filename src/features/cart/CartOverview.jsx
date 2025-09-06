import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "../../utils/media-queries";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

const StyledCartOverview = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-stone-800);
  padding: 16px;
  font-size: 14px;

  ${media.sm`
  padding: 24px;
  `}

  ${media.md`
  font-size: 16px;
  `}

  & p {
    display: flex;
    gap: 1rem;
    color: var(--color-stone-300);
    font-weight: 500;

    ${media.sm`
  gap: 1.5rem;
  `}
  }

  & a {
    color: var(--color-stone-200);
  }
`;

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <StyledCartOverview>
      <p>
        <span>{totalCartQuantity} پیتزا</span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">سبد خرید &rarr;</Link>
    </StyledCartOverview>
  );
}

export default CartOverview;
