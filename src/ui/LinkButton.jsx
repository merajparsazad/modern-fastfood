import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const styles = `font-size: 14px;
  color: var(--color-blue-500);
  text-decoration: transparent;
  transition: all 0.3s ease-in;

  &:hover {
    color: var(--color-blue-700);
    text-decoration: underline;`;

const StyledButton = styled.button`
  background-color: none;
  border: none;
  cursor: pointer;
  ${styles}
`;

const StyledLink = styled(Link)`
  ${styles}
`;

function LinkButton({ children, to }) {
  const navigate = useNavigate();

  if (to === "-1")
    return <StyledButton onClick={() => navigate(-1)}>{children}</StyledButton>;

  return <StyledLink to={to}>{children}</StyledLink>;
}

export default LinkButton;
