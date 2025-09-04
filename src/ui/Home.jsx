import styled from "styled-components";
import CreateUser from "../features/user/CreateUser";
import media from "../utils/media-queries";
import { useSelector } from "react-redux";
import Button from "./Button";

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
  const username = useSelector((state) => state.user.username);

  return (
    <StyledHome>
      <Title>
        بهترین پیتزا
        <br />
        <span>داغِ داغ، رسیده دمِ دستتون</span>
      </Title>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu">ادامه سفارش، {username}</Button>
      )}
    </StyledHome>
  );
}

export default Home;
