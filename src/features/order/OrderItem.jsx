function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{totalPrice}</p>
      </div>
    </li>
  );
}

export default OrderItem;
