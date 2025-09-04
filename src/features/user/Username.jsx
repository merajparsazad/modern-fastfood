import styled from "styled-components";
import media from "../../utils/media-queries";
import { useSelector } from "react-redux";

const StyledUsername = styled.div`
  display: none;
  font-size: 14px;
  font-weight: 500;

  ${media.md`
    display: block;
  `}
`;

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return <StyledUsername>{username}</StyledUsername>;
}

export default Username;
