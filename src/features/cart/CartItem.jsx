import styled from "styled-components";
import media from "../../utils/media-queries";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "./cartSlice";

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

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <StyledCartItem>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>${totalPrice}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </StyledCartItem>
  );
}

export default CartItem;
