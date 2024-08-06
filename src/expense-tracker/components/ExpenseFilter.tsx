interface Props {
  defaultSelectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({
  defaultSelectedCategory,
  onSelectCategory,
}: Props) => {
  return (
    <select
      id="categoryFilter"
      className="form-select"
      defaultValue={defaultSelectedCategory}
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="All Categories">All Categories</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
