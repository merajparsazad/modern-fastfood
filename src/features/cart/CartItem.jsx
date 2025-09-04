import styled from "styled-components";
import media from "../../utils/media-queries";
import DeleteItem from "./DeleteItem";

const StyledCartItem = styled.li`
  border-bottom: 1px solid var(--color-stone-200);
  padding: 12px 0;

  ${media.sm`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}

  & > p {
    margin-bottom: 4px;

    ${media.sm`
      margin-bottom: 0;
    `}
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.sm`
      gap: 24px;
    `}

    & p {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <StyledCartItem>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>${totalPrice}</p>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </StyledCartItem>
  );
}

export default CartItem;
