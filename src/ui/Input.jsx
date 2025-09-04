import styled from "styled-components";
import media from "../utils/media-queries";

const StyledInput = styled.input`
  width: 100%;
  border-radius: 9999px;
  border: 1px solid var(--color-stone-200);
  padding: 8px 16px;
  font-size: 14px;
  outline: 0;
  box-shadow: 0 0 0 0 var(--color-yellow-400);
  transition: all 0.3s ease-in;

  &:focus {
    box-shadow: 0 0 0 2px var(--color-yellow-400);
  }

  ${media.md`
    padding: 12px 24px;
  `}
`;

function Input(props) {
  return <StyledInput {...props} />;
}

export default Input;
