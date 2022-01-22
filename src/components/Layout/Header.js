import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import pizzaImage from "../../assets/pizza.jpg";
import pizzaIcon from "../../assets/smallpizza.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>
          Pizza <img src={pizzaIcon} alt="A small piece" />
        </h1>

        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={pizzaImage} alt="A table with pizza" />
      </div>
    </Fragment>
  );
};

export default Header;
