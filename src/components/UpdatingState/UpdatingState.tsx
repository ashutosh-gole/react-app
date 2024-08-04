import { useState } from "react";
import { produce } from "immer";

const UpdatingState = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
    { id: 3, title: "Bug 3", fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 2 ? { ...bug, fixed: true } : bug)));

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 2);
        if (bug) bug.fixed = true;
      })
    );
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
        Update Array Of Object Using immer
      </button>
    </>
  );
};

export default UpdatingState;
