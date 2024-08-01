import { useState } from "react";
interface Props {
  states: Array<string>;
  heading: string;
  onSelectItem: (index: number, state: string) => void;
}

function ListGroup({ states, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>

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
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(index, state);
              }}
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
