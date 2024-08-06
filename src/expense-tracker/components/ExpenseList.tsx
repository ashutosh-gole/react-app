interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;

  return (
    <table className="table table-borderd border-primary">
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <th>{expense.id}</th>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot>
        <tr>
          <th colSpan={2}>Total</th>
          <td colSpan={3}>
            {expenses.reduce((acc, expense) => expense.amount + acc, 0)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
