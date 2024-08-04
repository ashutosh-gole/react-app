import { useState } from "react";

const UpdatingState = () => {
  const [tags, setTags] = useState(["exciting", "cheerful"]);

  // for add
  const handleAdd = () => {
    setTags([...tags, "happy"]);
  };

  // for remove
  const handleRemove = () => {
    setTags(tags.filter((tag) => tag !== "happy"));
  };

  // for update
  const handleUpdate = () => {
    setTags(tags.map((tag) => (tag === "happy" ? "happines" : tag)));
  };

  return (
    <>
      <h1>Updating react states: updating array</h1>
      <h5>Tags array: {JSON.stringify(tags)}</h5>
      <button
        type="button"
        className={"btn btn-primary"}
        onClick={() => handleAdd()}
      >
        Array - add
      </button>
      &nbsp;&nbsp;
      <button
        type="button"
        className={"btn btn-primary"}
        onClick={() => handleRemove()}
      >
        Array - remove
      </button>
      &nbsp;&nbsp;
      <button
        type="button"
        className={"btn btn-primary"}
        onClick={() => handleUpdate()}
      >
        Array - update
      </button>
    </>
  );
};

export default UpdatingState;
