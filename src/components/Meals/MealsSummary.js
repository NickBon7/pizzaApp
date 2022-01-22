import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Pizzas, Delivered To You</h2>
      <p>
        Choose your favorite pizza from our menu and enjoy a tasty Italian pizza
        at home.
      </p>
      <p>
        All our pizzas are cooked in a wood stone oven, just-in-time and of
        course by Italian chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
