// Test ID: IIDSAT

import { useFetcher, useLoaderData } from "react-router-dom";
import { calcMinutesLeft, formatDate } from "../../utils/helpers";
import styled from "styled-components";
import OrderItem from "./OrderItem";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

const StyledOrder = styled.div`
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 32px 0;

  & h2 {
    font-size: 20px;
    font-weight: 500;
  }

  & ul {
    direction: ltr;
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;

    & div {
      display: flex;
      align-items: center;
      gap: 0 8px;

      & span:first-child {
        padding: 5px 8px;
        font-size: 14px;
        font-weight: 500;
        background-color: red;
        color: #ffe8e8;
        border-radius: 9999px;
      }

      & span:last-child {
        padding: 5px 8px;
        font-size: 14px;
        font-weight: 500;
        background-color: #00cf00;
        color: #e8ffea;
        border-radius: 9999px;
      }
    }
  }

  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
    background-color: var(--color-stone-200);
    padding: 20px 24px;

    & p:first-child {
      font-weight: 500;
    }

    & p:last-child {
      font-size: 14px;
      color: var(--color-stone-500);
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 8px 0;
    background-color: var(--color-stone-200);
    padding: 20px 24px;

    & p:not(:last-child) {
      font-size: 14px;
      font-weight: 500;
      color: var(--color-stone-600);
    }
    & p:last-child {
      font-weight: 500;
    }
  }
`;

function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher]
  );

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <StyledOrder>
      <div>
        <h2>وضعیت سفارش #{id}</h2>

        <div>
          {priority && <span>دارای اولویت</span>}
          <span>سفارش: {status}</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `فقط ${calcMinutesLeft(estimatedDelivery)} دقیقه مونده 😃`
            : "سفارش به دستتون رسیده"}
        </p>
        <p>(میانگین زمان تحویل: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul>
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId)
                ?.ingredients ?? []
            }
          />
        ))}
      </ul>

      <div>
        <p>بهای پیتزا: {orderPrice}$</p>
        {priority && <p>بهای اولویت: {priorityPrice}$</p>}
        <p>بهای تمام شده: {orderPrice + priorityPrice}$</p>
      </div>
      {!priority && <UpdateOrder />}
    </StyledOrder>
  );
}

export default Order;
