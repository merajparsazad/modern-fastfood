import styled from "styled-components";
import LinkButton from "../../ui/LinkButton";

const StyledEmptyCart = styled.div`
  padding: 12px 16px;

  & p {
    font-weight: 500;
    margin-top: 28px;
  }
`;

function EmptyCart() {
  return (
    <StyledEmptyCart>
      <LinkButton to="/menu">&larr; برگشت به منو</LinkButton>

      <p>سبد خریدت خالیه. با چندتا پیتزای خوشمزه پرش کن ;)</p>
    </StyledEmptyCart>
  );
}

export default EmptyCart;
