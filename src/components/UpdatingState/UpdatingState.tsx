import { useState } from "react";

const UpdatingState = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick1 = () => {
    setDrink({
      ...drink,
      price: 10,
    });
  };

  return (
    <>
      <h1>Updating react states: updating object</h1>
      <h5>Player object: {JSON.stringify(drink)}</h5>
      <button
        type="button"
        className={"btn btn-primary"}
        onClick={() => handleClick1()}
      >
        Update Object
      </button>
    </>
  );
};

export default UpdatingState;
