import { useState } from "react";
import styled from "styled-components";
import media from "../../utils/media-queries";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

const StyledCreateUser = styled.form`
  & p {
    margin-bottom: 16px;
    font-size: 14px;
    color: var(--color-stone-600);

    ${media.md`
      font-size: 16px;
    `}
  }

  & input {
    width: 288px;
    margin-bottom: 32px;
  }
`;

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <StyledCreateUser onSubmit={handleSubmit}>
      <p>👋 خوش آمدید! لطفا با نوشتن نام خود سفارش دادن رو شروع کنید:</p>

      <Input
        type="text"
        placeholder="نام و نام خانوادگی"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button>شروع سفارش</Button>
        </div>
      )}
    </StyledCreateUser>
  );
}

export default CreateUser;
