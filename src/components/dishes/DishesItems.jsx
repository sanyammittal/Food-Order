import classes from "./DishesItems.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function DishesItems({ item }) {
  const dispatch = useDispatch();
  const addToCartHandler = () => dispatch(cartActions.addToCart(item));

  return (
    <div className={classes.container} key={item.id}>
      <div className={classes.imageDiv}>
        <img src={item.image} className={classes.image} />
      </div>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <h5>{`₹${item.price}`}</h5>
      <button onClick={addToCartHandler}>Add to Cart</button>
    </div>
  );
}
