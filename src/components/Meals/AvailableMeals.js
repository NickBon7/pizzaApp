import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Margherita",
    description: "Diced tomatoes & stretchy mozzarella, topped with oregano.",
    price: 9.99,
  },
  {
    id: "m2",
    name: "Pepperoni",
    description: " It has ham, Italian sausage and mozzarella cheese.",
    price: 11.99,
  },
  {
    id: "m3",
    name: "Special ",
    description:
      "It comes with pepperoni, mushroom, sausage, onion, green peppers.",
    price: 13.99,
  },
  {
    id: "m4",
    name: "Diavola ",
    description: "Really-really hot with spicy Italian salami",
    price: 12.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
