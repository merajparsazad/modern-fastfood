// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { calcMinutesLeft, formatDate } from "../../utils/helpers";

function Order() {
  const order = useLoaderData();

  const {
    // id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    // cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>اولویت</span>}
          <span>{status} سفارش</span>
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

      <div>
        <p>بهای پیتزا: {orderPrice}</p>
        {priority && <p>بهای اولویت: {priorityPrice}</p>}
        <p>بهای تمام شده: {orderPrice + priorityPrice}</p>
      </div>
    </div>
  );
}

export default Order;
