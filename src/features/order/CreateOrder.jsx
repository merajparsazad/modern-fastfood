// import { useState } from "react";

import { Form, useActionData, useNavigation } from "react-router-dom";

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

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  console.log(cart);

  return (
    <div>
      <h2>میخوای سفارش بدی؟ بزن بریم!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div>
          <label>اسم</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>شماره موبایل</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>ادرس</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
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
          <button disabled={isSubmitting}>
            {isSubmitting ? "در حال سفارش..." : "سفارش"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
