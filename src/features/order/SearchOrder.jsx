import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import media from "../../utils/media-queries";

const Input = styled.input`
  width: 110px;
  border-radius: 9999px;
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  background-color: var(--color-yellow-100);
  outline: 0;
  outline-offset: 2px;
  transition: all 0.3s ease-in;

  &::placeholder {
    color: var(--color-stone-400);
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--color-yellow-500);
  }

  ${media.sm`
    width: 250px;

    &:focus {
    width: 300px;
  }
  `}
`;

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="جستجوی سفارش..."
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
