import classes from "./DishesType.module.css";
import { useNavigate } from "react-router-dom";

export default function DishesType({ item }) {
  const navigate = useNavigate();
  const navigateHandler = () => navigate(item.id);
  return (
    <>
      <div className={classes.container} key={item.id}>
        <img src={item.image} className={classes.image} />
        <p className={classes.p1}>{item.title}</p>
        <p className={classes.p2}>{item.description}</p>
        <button className={classes.button} onClick={navigateHandler}>
          TRY THIS
        </button>
      </div>
    </>
  );
}
