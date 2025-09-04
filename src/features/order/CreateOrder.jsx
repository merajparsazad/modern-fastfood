// import { useState } from "react";

import { Form, useActionData, useNavigation } from "react-router-dom";
import styled from "styled-components";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import media from "../../utils/media-queries";
import { useSelector } from "react-redux";

const fakeCart = [
  {
    pizzaId: 12,
    name: "مدیترانه‌ای",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "سبزیجات",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "قارچ و اسفناج",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

const StyledCreateOrder = styled.div`
  padding: 24px 16px;

  & h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 32px;
  }
`;

const StyledForm = styled(Form)`
  & > div {
    display: flex;
    gap: 8px;
    flex-direction: column;
    margin-bottom: 20px;

    ${media.sm`
      flex-direction: row;
      align-items: center;
    `}

    & label {
      ${media.sm`
        flex-basis:160px;
      `}
    }

    & div {
      flex-grow: 1;

      & p {
        font-size: 12px;
        margin-top: 8px;
        color: #bd0000;
        background-color: #fdc2c2;
        padding: 8px 10px;
        border-radius: 9999px;
      }
    }
  }

  & > div:nth-child(4) {
    align-items: center;
    flex-direction: row;
    gap: 20px;
    margin-bottom: 48px;
    white-space: nowrap;

    & label {
      font-weight: 500;
    }
  }
`;

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  accent-color: var(--color-yellow-400);
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 0 0 var(--color-yellow-400);
  transition: all 0.3s ease-in;

  &:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 4px var(--color-yellow-400);
  }
`;

function CreateOrder() {
  const username = useSelector((state) => state.user.username);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  console.log(cart);

  return (
    <StyledCreateOrder>
      <h2>میخوای سفارش بدی؟ بزن بریم!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <StyledForm method="POST">
        <div>
          <label>اسم</label>
          <div>
            <Input
              type="text"
              name="customer"
              defaultValue={username}
              required
            />
          </div>
        </div>

        <div>
          <label>شماره موبایل</label>
          <div>
            <Input type="tel" name="phone" required />
            {formErrors?.phone && <p>{formErrors.phone}</p>}
          </div>
        </div>

        <div>
          <label>ادرس</label>
          <div>
            <Input type="text" name="address" required />
          </div>
        </div>

        <div>
          <Checkbox
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">میخوای سفارشت تو اولویت باشه؟</label>
        </div>

        <div>
          {/* ارسال اطلاعات cart با فرمت جیسون به سرور */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting}>
            {isSubmitting ? "در حال سفارش..." : "سفارش"}
          </Button>
        </div>
      </StyledForm>
    </StyledCreateOrder>
  );
}

export default CreateOrder;
