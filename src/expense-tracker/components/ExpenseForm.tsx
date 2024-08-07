import { z } from "zod";
import categories from "../constants/categories";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onSubmitClick: (expense: ExpenseFormData) => void;
}

const ExpenseSchema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type ExpenseFormData = z.infer<typeof ExpenseSchema>;

const ExpenseForm = ({ onSubmitClick }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(ExpenseSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmitClick(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          {...register("description")}
        />

        {errors.description && (
          <p className="pt-2 text-danger">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="number"
          className="form-control"
          id="amount"
          {...register("amount", { valueAsNumber: true })}
        />
        {errors.amount && (
          <p className="pt-2 text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>

        <select id="category" className="form-select" {...register("category")}>
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="pt-2 text-danger">{errors.category.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
