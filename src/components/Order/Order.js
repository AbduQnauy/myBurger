import React from "react";
import classes from "./Order.module.css";

const order = props => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          border: "1px solid #aaa",
          boxShadow: "0 2px 3px #eee",
          margin: "0 8px",
          padding: "5px",
          boxSizing: "border-box"
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount}){" "}
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price:
        <strong>{props.price.toFixed(2)} EGP</strong>
      </p>
    </div>
  );
};

export default order;
