import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const naviagate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        naviagate("/");
      }}
    >
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ContactPage;
