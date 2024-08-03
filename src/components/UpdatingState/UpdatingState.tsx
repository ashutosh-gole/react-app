import { useState } from "react";

const UpdatingState = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "john",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spice Pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick1 = () => {
    setGame({
      ...game,
      player: { ...game.player, name: "mosh" },
    });
  };

  const handleClick2 = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "Cheese"],
    });
  };

  const handleClick3 = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <>
      <h1>Updating react states: Exercise 1 - Object</h1>
      <h5>Player object: {JSON.stringify(game)}</h5>
      <button
        type="button"
        className={"btn btn-primary"}
        onClick={() => handleClick1()}
      >
        Update Object
      </button>

      <hr />

      <h1>Updating react states: Exercise 2 - Array</h1>
      <h5>Pizza object: {JSON.stringify(pizza)}</h5>
      <button
        type="button"
        className={"btn btn-primary"}
        onClick={() => handleClick2()}
      >
        Update Array
      </button>

      <hr />

      <h1>Updating react states: Exercise 2 - Object + Array</h1>
      <h5>Cart object: {JSON.stringify(cart)}</h5>
      <button
        type="button"
        className={"btn btn-primary"}
        onClick={() => handleClick3()}
      >
        Update Object + Array
      </button>
    </>
  );
};

export default UpdatingState;
