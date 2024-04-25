import OrderItem from "../OrderItem";

const Order = ({ items }) => {
  return (
    <>
      {
        items.map((order) => (
          <OrderItem key={order.name} name={order.name} image={order.image} />
        ))
      }
    </>
  );
};

export default Order;