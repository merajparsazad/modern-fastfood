import styled from "styled-components";

const StyledOrderItem = styled.li`
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
`;

function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;

  return (
    <StyledOrderItem>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>${totalPrice}</p>
      </div>
    </StyledOrderItem>
  );
}

export default OrderItem;
