import { useState } from "react";

import { Form, useActionData, useNavigation } from "react-router-dom";
import styled from "styled-components";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import media from "../../utils/media-queries";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../cart/EmptyCart";
import { getTotalCartPrice } from "../cart/cartSlice";
import { fetchAddress } from "../user/userSlice";

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

  & > div:nth-child(3) {
    position: relative;

    & span {
      position: absolute;
      width: auto;
      top: 3px;
      left: 4px;
      z-index: 99;

      ${media.md`
        top: 5px;
        left: 6px;
      `}

      & button {
        background-color: transparent;
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
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const dispatch = useDispatch();

  const formErrors = useActionData();

  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

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
            <Input
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
            />
            {addressStatus === "error" && <p>{errorAddress}</p>}
          </div>

          {!position.latitude && !position.longitude && (
            <span>
              <Button
                type="icon"
                disabled={isLoadingAddress}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="10" r="3"></circle>
                  <path d="M12 22s7-7.2 7-12.2A7 7 0 0 0 5 9.8C5 14.8 12 22 12 22z"></path>
                </svg>
              </Button>
            </span>
          )}
        </div>

        <div>
          <Checkbox
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">میخوای سفارشت تو اولویت باشه؟</label>
        </div>

        <div>
          {/* ارسال اطلاعات cart با فرمت جیسون به سرور */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ""
            }
          />
          <Button disabled={isSubmitting || isLoadingAddress}>
            {isSubmitting ? "در حال سفارش..." : `سفارش - ${totalPrice}$`}
          </Button>
        </div>
      </StyledForm>
    </StyledCreateOrder>
  );
}

export default CreateOrder;
