import styled, { keyframes } from "styled-components";

const loading = keyframes`
  20% {
    background-position: 0% 0%, 50% 50%, 100% 50%;
  }
  40% {
    background-position: 0% 100%, 50% 0%, 100% 50%;
  }
  60% {
    background-position: 0% 50%, 50% 100%, 100% 0%;
  }
  80% {
    background-position: 0% 50%, 50% 50%, 100% 100%;
  }
`;

const StyledLoader = styled.div`
  position: absolute;
  background-color: var(--color-stone-300 0.2);
  backdrop-filter: blur(2px);
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    width: 45px;
    aspect-ratio: 0.75;
    --c: no-repeat linear-gradient(var(--color-stone-800) 0 0);
    background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
    background-size: 20% 50%;
    animation: ${loading} 1s infinite linear;
  }
`;

function Loader() {
  return (
    <StyledLoader>
      <div></div>
    </StyledLoader>
  );
}

export default Loader;
