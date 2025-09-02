// Test ID: IIDSAT

import { calcMinutesLeft, formatDate } from "../../utils/helpers";

const order = {
  id: "ABCDEF",
  customer: "معراج",
  phone: "09919391440",
  address: "البرز - کرج - جهانشهر",
  priority: true,
  estimatedDelivery: "2027-04-25T10:00:00",
  cart: [
    {
      pizzaId: 7,
      name: "ناپولی",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: "شیکاگو",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: "نیویورک",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: "35.840,51.010",
  orderPrice: 95,
  priorityPrice: 19,
};

function Order() {
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
