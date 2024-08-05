import { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();
    // console.log("Name === ", nameRef.current?.value);
    // console.log("Age === ", ageRef.current?.value);

    if (nameRef.current) person.name = nameRef.current?.value;
    if (ageRef.current) person.age = parseInt(ageRef.current?.value);

    console.log("person === ", person);
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <h1>React Form</h1>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input ref={nameRef} type="text" className="form-control" id="name" />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input ref={ageRef} type="number" className="form-control" id="age" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
