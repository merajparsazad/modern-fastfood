import styled from "styled-components";

const StyledOrderItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px 0;
  border-bottom: 1px solid var(--color-stone-200);
  padding: 12px 0;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    gap: 16px;

    & p:first-child {
      & span {
        font-weight: 500;
      }
    }

    & p:last-child {
      font-weight: 500;
    }
  }

  & > p {
    font-size: 14px;
    font-style: italic;
    color: var(--color-stone-500);
    text-transform: capitalize;
  }
`;

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <StyledOrderItem>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>${totalPrice}</p>
      </div>
      <p>{isLoadingIngredients ? "Loading..." : ingredients.join(", ")}</p>
    </StyledOrderItem>
  );
}

export default OrderItem;
