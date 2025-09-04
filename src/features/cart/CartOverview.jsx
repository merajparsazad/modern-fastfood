import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "../../utils/media-queries";

const StyledCartOverview = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-stone-800);
  padding: 16px;
  font-size: 14px;

  ${media.sm`
  padding: 24px 0;
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
  return (
    <StyledCartOverview>
      <p>
        <span>23 پیتزا</span>
        <span>$23.23</span>
      </p>
      <Link to="/cart">سبد خرید &rarr;</Link>
    </StyledCartOverview>
  );
}

export default CartOverview;
