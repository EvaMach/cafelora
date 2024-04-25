import OrderItem from "../OrderItem";

const Order = ({ items }) => {
  return (
    <>
      {
        items.map((order) => (
          <OrderItem name={order.name} image={order.image} />
        ))
      }
    </>
  );
};

export default Order;