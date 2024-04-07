import Modal from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-slice";
import { checkOutActions } from "../../store/checkout-slice";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";

export default function Cart() {
  const show = useSelector((state) => state.modal.show);
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();
  const closeModalHandler = () => dispatch(modalActions.hideModal());

  const placeOrderHandler = () => {
    dispatch(modalActions.hideModal());
    dispatch(checkOutActions.showCheckOut());
  };

  return (
    <Modal open={show} size={classes.size}>
      <h3 className={classes.title}>Your Cart</h3>
      {cartItems.length > 0 ? (
        cartItems.map((item) => <CartItems item={item} key={item.id} />)
      ) : (
        <p className={classes.noItemText}>No item is added to the cart !!</p>
      )}
      {cartItems.length > 0 && (
        <p className={classes.totalPrice}>{`Your Bill : ₹${cartTotalPrice}`}</p>
      )}
      <div className={classes.buttonsDiv}>
        <button onClick={closeModalHandler} className={classes.closeButton}>
          Close
        </button>
        {cartItems.length > 0 && (
          <button className={classes.orderButton} onClick={placeOrderHandler}>
            Place Order
          </button>
        )}
      </div>
    </Modal>
  );
}
