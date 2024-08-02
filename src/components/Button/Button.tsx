import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "success" | "link";
  onButtonClick: () => void;
}

const Button = ({ children, color = "primary", onButtonClick }: Props) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

export default Button;
