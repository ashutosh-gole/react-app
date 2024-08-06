import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// schema using zod package
const UserSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(5, { message: "Must be 5 or more characters long" }),
  age: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .nonnegative({ message: "Age cannot be negative" }), // nonnegative method used
});

// extract the inferred type
type FormData = z.infer<typeof UserSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: "Rahul",
      age: 30,
    },
  });

  const submitClick = (data: FormData) => {
    console.log("data === ", data);
  };

  return (
    <form onSubmit={handleSubmit(submitClick)}>
      <h1>React Form: schema based validation with zod</h1>

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
        {errors.name && (
          <p className="pt-2 text-danger">{errors.name.message}</p>
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
          {...register("age", { valueAsNumber: true })}
        />
        {errors.age && <p className="pt-2 text-danger">{errors.age.message}</p>}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
