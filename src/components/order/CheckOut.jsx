import Modal from "../modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import classes from "./CheckOut.module.css";
import classes2 from "../cart/Cart.module.css";
import { checkOutActions } from "../../store/checkout-slice";
import { orderModalActions } from "../../store/order-modal-slice";
import { orderActions } from "../../store/order-slice";
import { cartActions } from "../../store/cart-slice";
import moment from "moment";

export default function CheckOut() {
  const show = useSelector((state) => state.checkOut.show);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const checkOutCloseHandler = () => dispatch(checkOutActions.hideCheckOut());

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    data.items = cartItems;
    data.totalPrice = totalPrice;
    data.id = Math.floor(Math.random() * 100).toString();
    data.date = moment().format("YYYY-MM-DD");
    data.time = moment().format("HH:mm:ss");
    dispatch(orderActions.addCustomerOrder(data));
    dispatch(checkOutActions.hideCheckOut());
    dispatch(orderModalActions.showOrderModal());
    dispatch(cartActions.emptyCart());
    event.target.reset();
  };

  return (
    <Modal open={show} size={classes.size}>
      <h3 className={classes.title}>Check Out</h3>
      <p className={classes.amount}>{`Total Amount : ₹${totalPrice}`}</p>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <label className={classes.label}>Full Name</label>
          <input type="text" className={classes.input} name="name" required />
        </div>
        <div>
          <label className={classes.label}>Email Address</label>
          <input type="text" className={classes.input} name="email" required />
        </div>
        <div>
          <label className={classes.label}>Contact Number</label>
          <input
            type="text"
            className={classes.input}
            name="contact"
            required
          />
        </div>
        <div>
          <label className={classes.label}>Street</label>
          <input type="text" className={classes.input} name="street" required />
        </div>
        <div className={classes.internalDiv}>
          <div>
            <label className={classes.label}>PIN</label>
            <input type="text" className={classes.input} name="pin" required />
          </div>
          <div className={classes.formGroup}>
            <label className={classes.label}>City</label>
            <input type="text" className={classes.input} name="city" required />
          </div>
        </div>
        <div className={classes2.buttonsDiv}>
          <button
            onClick={checkOutCloseHandler}
            className={classes2.closeButton}
          >
            Close
          </button>
          <button className={classes2.orderButton} type="submit">
            Place Order
          </button>
        </div>
      </form>
    </Modal>
  );
}
