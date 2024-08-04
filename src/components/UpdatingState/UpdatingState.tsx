import { useState } from "react";

const UpdatingState = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
    { id: 3, title: "Bug 3", fixed: false },
  ]);

  // for add
  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 2 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <>
      <h1>
        Updating react states: updating array of objects - update single object
      </h1>
      <h5>Bugs array: {JSON.stringify(bugs)}</h5>
      <button
        type="button"
        className={"btn btn-primary"}
        onClick={() => handleClick()}
      >
        Update Array Of Object
      </button>
    </>
  );
};

export default UpdatingState;
