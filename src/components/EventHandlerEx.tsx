import { MouseEvent } from "react";

function EventHandlerEx() {
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
  const handleClick1 = (index: number, state: string, event: MouseEvent) =>
    console.log("handleClick1: index, state, event === ", index, state, event);

  const handleClick2 = (index: number, state: string) =>
    console.log("handleClick2: index, state === ", index, state);

  function handleClick3(event: MouseEvent) {
    console.log("handleClick3: index, state, event === ", event);
  }

  return (
    <>
      <h1>Event Handler 1</h1>

      {states.length ? (
        <ul className="list-group">
          {states.map((state, index) => (
            <li
              className="list-group-item"
              key={index}
              onClick={(event) => handleClick1(index, state, event)}
            >
              {state}
            </li>
          ))}
        </ul>
      ) : (
        <p>States not found</p>
      )}

      <h1>Event Handler 2</h1>

      {states.length ? (
        <ul className="list-group">
          {states.map((state, index) => (
            <li
              className="list-group-item"
              key={index}
              onClick={() => handleClick2(index, state)}
            >
              {state}
            </li>
          ))}
        </ul>
      ) : (
        <p>States not found</p>
      )}

      <h1>Event Handler 3</h1>

      {states.length ? (
        <ul className="list-group">
          {states.map((state, index) => (
            <li
              className="list-group-item"
              key={index}
              onClick={(event) => handleClick3(event)}
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

export default EventHandlerEx;
