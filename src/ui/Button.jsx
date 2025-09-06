import styled, { css } from "styled-components";
import media from "../utils/media-queries";
import { Link } from "react-router-dom";

const base = css`
  display: inline-block;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  outline: 0;
  transition: all 0.3s ease-in;
  box-shadow: 0 0 0 0 var(--color-yellow-300);
  background-color: var(--color-yellow-400);
  color: var(--color-stone-800);
  font-weight: 500;

  &:hover {
    background-color: var(--color-yellow-300);
  }

  &:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 4px var(--color-yellow-300);
  }

  &:active {
    background-color: var(--color-yellow-300);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const types = {
  primary: css`
    padding: 10px 14px;
    font-size: 14px;

    ${media.md`
    padding: 14px 18px;
    font-size: 16px;
  `}
  `,
  small: css`
    padding: 8px 12px;
    font-size: 12px;

    ${media.md`
    padding: 12px 16px;
    font-size: 14px;
  `}
  `,

  round: css`
    padding: 6px 10px;
    font-size: 12px;

    ${media.md`
    padding: 10px 14px;
    font-size: 14px;
  `}
  `,

  secondary: css`
    padding: 8px 12px;
    font-size: 14px;
    display: inline-block;
    border: 2px solid var(--color-stone-300);
    border-radius: 9999px;
    outline: 0;
    transition: all 0.3s ease-in;
    box-shadow: 0 0 0 0 var(--color-yellow-300);
    background-color: transparent;
    color: var(--color-stone-400);
    font-weight: 500;

    &:hover {
      background-color: var(--color-stone-300);
      color: var(--color-stone-800);
    }

    &:focus {
      background-color: var(--color-stone-300);
      box-shadow: 0 0 0 2px white, 0 0 0 4px var(--color-stone-300);
    }

    &:active {
      background-color: var(--color-stone-300);
      color: var(--color-stone-800);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }

    ${media.md`
    padding: 12px 16px;
    font-size: 16px;
  `}
  `,
};

const StyledButton = styled.button`
  ${base}
  ${(props) => types[props.type || "primary"]}
`;

const StyledLink = styled(Link)`
  ${base}
  ${(props) => types[props.type || "primary"]}
`;

function Button({ children, to, ...props }) {
  if (to)
    return (
      <StyledLink to={to} {...props}>
        {children}
      </StyledLink>
    );

  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
