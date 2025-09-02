// import { useState } from "react";

// const isValidPhone = (str) =>
//   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
//     str
//   );

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
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  console.log(cart);

  return (
    <div>
      <h2>میخوای سفارش بدی؟ بزن بریم!</h2>

      <form>
        <div>
          <label>اسم</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>شماره موبایل</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
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
          <button>سفارش</button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
