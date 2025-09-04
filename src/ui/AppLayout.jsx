import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

const Container = styled.div`
  overflow-y: scroll;
`;

const Main = styled.main`
  max-width: 768px;
  margin: 0 auto;
`;

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <StyledAppLayout>
      {isLoading && <Loader />}

      <Header />
      <Container>
        <Main>
          <Outlet />
        </Main>
      </Container>

      <CartOverview />
    </StyledAppLayout>
  );
}

export default AppLayout;
