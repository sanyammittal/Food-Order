import classes from "./CustomerOrder.module.css";

export default function CustomerOrder({ order }) {
  return (
    <div className={classes.container}>
      <div className={classes.orderDates}>
        <p>
          {order.time} <br /> <b>{order.date}</b>
        </p>
      </div>
      <div>
        <div className={classes.customerDetails}>
          <p>CUSTOMER DETAILS</p>
          <table>
            <tr>
              <td>
                <b>NAME :</b>
              </td>
              <td>
                <input
                  type="text"
                  value={order.name}
                  readOnly="readonly"
                  className={classes.input}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>Bill : </b>
              </td>
              <td>
                <input
                  type="text"
                  value={"₹" + order.totalPrice}
                  readOnly="readonly"
                  className={classes.input}
                />
              </td>
            </tr>
            <tr>
              <td>
                <b>Address : </b>
              </td>
              <td>
                <input
                  type="text"
                  value={`${order.street}, ${order.city}, ${order.pin}`}
                  readOnly="readonly"
                  className={classes.input}
                />
              </td>
            </tr>
          </table>
        </div>
        <div className={classes.customerDetails}>
          <p>ORDER DETAILS</p>
          {order.items.map((item) => (
            <p
              className={classes.orderItems}
            >{`${item.title} : ${item.quantity} X ₹${item.price}`}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
