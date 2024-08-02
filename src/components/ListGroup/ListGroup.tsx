import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  background-color: cornsilk;
  border: 1px solid gray;
  margin: 12px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.active ? "rgb(105, 147, 231)" : "none"};
`;

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
        <List>
          {states.map((state, index) => (
            <ListItem
              active={selectedIndex === index}
              key={index}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(index, state);
              }}
            >
              {state}
            </ListItem>
          ))}
        </List>
      ) : (
        <p>States not found</p>
      )}
    </>
  );
}

export default ListGroup;
