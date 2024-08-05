import { FormEvent, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({ name: "Ashutosh G", age: 28 });

  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();
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
          <input
            type="text"
            className="form-control"
            id="name"
            value={person.name}
            onChange={(event) =>
              setPerson({ ...person, name: event.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={person.age}
            onChange={(event) =>
              setPerson({ ...person, age: parseInt(event.target.value) })
            }
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
