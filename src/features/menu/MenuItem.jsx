import styled from "styled-components";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";

const StyledMenuItem = styled.li`
  display: flex;
  gap: 16px;
  padding: 8px 0;
  border-bottom: 1px solid var(--color-stone-200);

  & > div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding-top: 2px;

    & > P:first-child {
      font-weight: 500;
    }

    & > P:nth-child(2) {
      font-size: 14px;
      font-style: italic;
      color: var(--color-stone-500);
      text-transform: capitalize;
    }

    & > div {
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & p {
        font-size: 14px;
        font-weight: 500;
        color: var(--color-stone-500);
      }
    }
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  opacity: ${(props) => (props.$soldOut ? 0.7 : 1)};
  filter: ${(props) => (props.$soldOut ? "grayscale(100%)" : "none")};
`;

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <StyledMenuItem>
      <Img src={imageUrl} $soldOut={soldOut} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{unitPrice}</p> : <p>اتمام موجودی</p>}

          {isInCart && <DeleteItem pizzaId={id} />}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              اضافه به سبد
            </Button>
          )}
        </div>
      </div>
    </StyledMenuItem>
  );
}

export default MenuItem;
