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

  return (
    <>
      <h1>List Group - States:</h1>

      {states.length ? (
        <ul className="list-group">
          {states.map((state, index) => (
            <li
              className="list-group-item"
              key={index}
              onClick={(event) =>
                console.log("index, state, event === ", index, state, event)
              }
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
