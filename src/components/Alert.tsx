import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onCloseClick: () => void;
}

const Alert = ({ children, onCloseClick }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onCloseClick}
      ></button>
    </div>
  );
};

export default Alert;
