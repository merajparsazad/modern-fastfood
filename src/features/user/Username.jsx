import styled from "styled-components";
import media from "../../utils/media-queries";

const StyledUsername = styled.div`
  display: none;
  font-size: 14px;
  font-weight: 500;

  ${media.md`
    display: block;
  `}
`;

function Username() {
  return <StyledUsername>معراج</StyledUsername>;
}

export default Username;
