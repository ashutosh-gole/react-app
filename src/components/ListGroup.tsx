import { MouseEvent } from "react";

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

  // event handler
  const handleClick = (event: MouseEvent) =>
    console.log("index, state, event === ", event);

  return (
    <>
      <h1>List Group - States:</h1>

      {states.length ? (
        <ul className="list-group">
          {states.map((state, index) => (
            <li className="list-group-item" key={index} onClick={handleClick}>
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
