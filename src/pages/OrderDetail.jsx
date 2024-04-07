import Header from "../components/header/Header";
import CustomerOrder from "../components/order/CustomerOrder";
import classes from "./OrderDetail.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function OrderDetail() {
  const orderDetails = useSelector((state) => state.order.order);
  const navigate = useNavigate();
  const orderNowHandler = () => navigate("/dishes");

  return (
    <>
      <Header />
      {console.log(orderDetails)}
      <main className={classes.main}>
        <div className={classes.extraGap} />
        {orderDetails.length > 0 ? (
          orderDetails.map((order) => (
            <CustomerOrder order={order} key={order.id} />
          ))
        ) : (
          <div className={classes.noOrder}>
            <p className={classes.p1}>
              <span>Haven't</span> Ordered Yet
            </p>
            <p className={classes.p2}>
              Proceed to make your <span>First Order !!</span>
            </p>
            <button className={classes.button} onClick={orderNowHandler}>
              Order Now
            </button>
          </div>
        )}
      </main>
    </>
  );
}
