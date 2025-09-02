import { Link } from 'react-router-dom';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'مدیترانه‌ای',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'سبزیجات',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'قارچ و اسفناج',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  console.log(cart);

  return (
    <div>
      <Link to="/menu">&larr; برگشت به منو</Link>

      <h2>سبد خرید, اسم یوزر</h2>

      <div>
        <Link to="/order/new">سفارش</Link>
        <button>پاک کردن</button>
      </div>
    </div>
  );
}

export default Cart;
