import { useState } from "react";

const UpdatingState = () => {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipcode: 94111,
    },
  });

  const handleClick1 = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, city: "Pune" },
    });
  };

  return (
    <>
      <h1>Updating react states: updating nested object</h1>
      <h5>Customer object: {JSON.stringify(customer)}</h5>
      <button
        type="button"
        className={"btn btn-primary"}
        onClick={() => handleClick1()}
      >
        Update Nested Object
      </button>
    </>
  );
};

export default UpdatingState;
