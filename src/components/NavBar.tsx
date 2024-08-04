interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return <div>NavBar: Cart Count - {cartItemsCount}</div>;
};

export default NavBar;
