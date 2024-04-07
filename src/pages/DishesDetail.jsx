import { useParams } from "react-router-dom";
import classes from "./DishesDetail.module.css";
import DishesItems from "../components/dishes/DishesItems";
import { STARTERS } from "../dummy/starters";
import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";
import { SIDE_DISHES } from "../dummy/side-dishes";
import { MAIN_COURSE } from "../dummy/main-course";
import { DESSERTS } from "../dummy/dessert";

export default function DishesDetail() {
  const params = useParams();
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    params.dishesId === "starters" && setList(STARTERS);
    params.dishesId === "side-dishes" && setList(SIDE_DISHES);
    params.dishesId === "main-course" && setList(MAIN_COURSE);
    params.dishesId === "dessert" && setList(DESSERTS);
  }, [params.dishesId]);

  const navigateBackHandler = () => navigate("/dishes");

  return (
    <>
      <Header />
      <main className={classes.main}>
        <div className={classes.internalDiv}>
          {list.map((item) => (
            <DishesItems item={item} key={item.id} />
          ))}
        </div>
        <button className={classes.backButton} onClick={navigateBackHandler}>
          Back To Dishes
        </button>
      </main>
    </>
  );
}
