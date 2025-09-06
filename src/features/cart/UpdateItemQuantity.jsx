import styled from "styled-components";
import Button from "../../ui/Button";
import media from "../../utils/media-queries";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

const StyledUpdateItemQuantity = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  ${media.md`
    gap: 12px;
  `}

  & span {
    font-size: 14px;
    font-weight: 500;
  }
`;

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <StyledUpdateItemQuantity>
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </StyledUpdateItemQuantity>
  );
}

export default UpdateItemQuantity;
