import Header from "../components/header/Header";
import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const navigationHandler = () => navigate("/dishes");

  return (
    <>
      <Header />
      <main>
        <div className={classes.image}>
          <p className={classes.p1}>
            Dinner with us, <span>family !!</span>
          </p>
          <p className={classes.p2}>Accidental Appearances</p>
          <button onClick={navigationHandler} className={classes.button}>Order Meal Now</button>
        </div>
      </main>
    </>
  );
}
