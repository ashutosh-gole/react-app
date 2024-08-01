import { MouseEvent, useState } from "react";

function ListGroup() {
  let states = [
    "Maharashtra",
    "Goa",
    "Karnataka",
    "Uttar Pradesh",
    "Gujrat",
    "Madhy Pradesh",
    "Rajsthan",
    "Odisa",
    "Uttarakhand",
  ];
  // let selectedIndex = -1;
  // const arr = useState(-1);
  // arr[0] ==> variable selectedIndex
  // arr[1] ==> updated function

  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const [name, setName] = useState("");

  // event handler
  const handleClick = (event: MouseEvent) =>
    console.log("index, state, event === ", event);

  return (
    <>
      <h1>List Group - States:</h1>

      {states.length ? (
        <ul className="list-group">
          {states.map((state, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={index}
              onClick={() => setSelectedIndex(index)}
            >
              {state}
            </li>
          ))}
        </ul>
      ) : (
        <p>States not found</p>
      )}
    </>
  );
}

export default ListGroup;
