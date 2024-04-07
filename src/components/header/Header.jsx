import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import foodLogo from "../../assets/logo/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal-slice";
import Cart from "../cart/Cart.jsx";
import CheckOut from "../order/CheckOut.jsx";
import OrderSuccessful from "../order/OrderSuccessful.jsx";

export default function Header() {
  const dispatch = useDispatch();
  const modalOpenHandler = () => dispatch(modalActions.showModal());
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <Cart />
      <CheckOut />
      <OrderSuccessful />
      <header>
        <div>
          <Link to="/">
            <img src={foodLogo} className={classes.headerImage} />
          </Link>
        </div>
        <div className={classes.rightDiv}>
          <ul className={classes.menuList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dishes"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Dishes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order-detail"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Your-Order
              </NavLink>
            </li>
          </ul>
          <button className={classes.cart} onClick={modalOpenHandler}>
            {`Cart (${cartQuantity})`}
          </button>
        </div>
      </header>
    </>
  );
}
