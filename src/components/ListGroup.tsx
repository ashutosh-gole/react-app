function ListGroup() {
  const states = [
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
      <ul className="list-group">
        {states.map((state, index) => (
          <li className="list-group-item" key={index}>
            {state}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
