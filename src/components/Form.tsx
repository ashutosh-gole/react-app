import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  // nested destructuring in js/ts
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

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
            {...register("name", { required: true, minLength: 3 })}
          />
          {errors.name?.type === "required" && (
            <p className="pt-2 text-danger">The name field is required</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="pt-2 text-danger">
              The name must be at least 3 characters
            </p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            {...register("age", { required: true, min: -1 })}
          />
          {errors.age?.type === "required" && (
            <p className="pt-2 text-danger">The age field is required</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
