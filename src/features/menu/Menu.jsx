import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import styled from "styled-components";

const StyledMenu = styled.ul`
  padding: 0 8px;
`;

function Menu() {
  const menu = useLoaderData();

  return (
    <StyledMenu>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </StyledMenu>
  );
}

export default Menu;
