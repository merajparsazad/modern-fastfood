import styled from "styled-components";
import Button from "../../ui/Button";

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
  const {
    // id,
    name,
    unitPrice,
    ingredients,
    soldOut,
    imageUrl,
  } = pizza;

  return (
    <StyledMenuItem>
      <Img src={imageUrl} $soldOut={soldOut} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{unitPrice}</p> : <p>اتمام موجودی</p>}
          <Button type="small">اضافه به سبد</Button>
        </div>
      </div>
    </StyledMenuItem>
  );
}

export default MenuItem;
