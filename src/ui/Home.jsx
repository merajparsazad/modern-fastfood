import styled from "styled-components";
import CreateUser from "../features/user/CreateUser";
import media from "../utils/media-queries";

const StyledHome = styled.div`
  margin: 40px 0;
  padding: 0 16px;
  text-align: center;

  ${media.sm`
    margin: 64px 0;
  `}
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 32px;

  ${media.md`
    font-size: 30px;
  `}

  & span {
    color: var(--color-yellow-500);
  }
`;

function Home() {
  return (
    <StyledHome>
      <Title>
        بهترین پیتزا
        <br />
        <span>داغِ داغ، رسیده دمِ دستتون</span>
      </Title>

      <CreateUser />
    </StyledHome>
  );
}

export default Home;
