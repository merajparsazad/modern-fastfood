import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import styled from "styled-components";
import Username from "../features/user/Username";
import media from "../utils/media-queries";

const Heading = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-yellow-400);
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-stone-200);

  ${media.sm`
    padding: 12px 24px;
  `}
`;

function Header() {
  return (
    <Heading>
      <Link to="/">صفحه اصلی</Link>

      <SearchOrder />

      <Username />
    </Heading>
  );
}

export default Header;
