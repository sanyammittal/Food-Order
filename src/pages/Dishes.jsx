import DishesType from "../components/dishes/DishesType";
import Header from "../components/header/Header";
import classes from "./Dishes.module.css";
import { MENU } from "../dummy/menu";
export default function Dishes() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <div className={classes.extraGap} />
        <p className={classes.title}>
          Have the <span>delicious meal !!</span>
        </p>
        <div className={classes.listDiv}>
          {MENU.map((item) => (
            <DishesType item={item} key={item.id} />
          ))}
        </div>
      </main>
    </>
  );
}
