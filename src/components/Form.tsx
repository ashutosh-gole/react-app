import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  // your form logic
  const submitClick = (data: FieldValues) => {
    console.log("data === ", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit((data) => submitClick(data))}>
        <h1>
          React Form: manage form with <i>react-hook-form</i> library
        </h1>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register("name")}
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
            {...register("id")}
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
