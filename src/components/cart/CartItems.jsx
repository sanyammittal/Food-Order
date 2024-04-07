import classes from "./CartItems.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function CartItems({ item }) {
  const dispatch = useDispatch();
  const incrementQuantityHandler = () => dispatch(cartActions.addToCart(item));
  const decrementQuantityHandler = () =>
    dispatch(cartActions.removeFromCart(item.id));

  return (
    <div className={classes.itemsList}>
      <p
        className={classes.items}
      >{`${item.title} : ${item.quantity} X ₹${item.price}`}</p>
      <div className={classes.itemsQuantity}>
        <button onClick={decrementQuantityHandler}>-</button>
        <p className={classes.quantity}>{item.quantity}</p>
        <button onClick={incrementQuantityHandler}>+</button>
      </div>
    </div>
  );
}
