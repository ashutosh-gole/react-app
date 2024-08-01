interface Props {
  children: string;
  color?: "primary" | "success" | "link";
  onButtonClick: () => void;
}

const Button = ({ children, color = "primary", onButtonClick }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

export default Button;
