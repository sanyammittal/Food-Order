import Modal from "../modal/Modal";
import classes from "./OrderSuccessful.module.css";
import classes2 from "../cart/Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { orderModalActions } from "../../store/order-modal-slice";
import { useNavigate } from "react-router-dom";

export default function OrderSuccessful() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const show = useSelector((state) => state.orderModal.show);
  const closeModalHandler = () => dispatch(orderModalActions.hideOrderModal());
  const checkDetailsHandler = () => {
    dispatch(orderModalActions.hideOrderModal());
    navigate("/order-detail");
  };

  return (
    <Modal open={show} size={classes.size}>
      <h3 className={classes2.title}>Order Successful</h3>
      <p className={classes.thankText}>
        Dear customer, your order has been successfully placed. Your will
        receive your meal with in 15 minutes !!
      </p>
      <div className={classes2.buttonsDiv}>
        <button className={classes2.closeButton} onClick={closeModalHandler}>
          Close
        </button>
        <button className={classes2.orderButton} onClick={checkDetailsHandler}>
          Check Details
        </button>
      </div>
    </Modal>
  );
}
