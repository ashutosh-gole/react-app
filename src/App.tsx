import { useState } from "react";
import "./App.css";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

function App() {
  // set the default selected category as "Utilities" for practice
  const [selectedCategory, setSelectedCategory] = useState("Utilities");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 20, category: "Utilities" },
    { id: 3, description: "ccc", amount: 30, category: "Utilities" },
    { id: 4, description: "ddd", amount: 40, category: "Groceries" },
    { id: 5, description: "eee", amount: 50, category: "Utilities" },
  ]);
  const visibleExpenses =
    selectedCategory && selectedCategory !== "All Categories"
      ? expenses.filter((expense) => expense.category === selectedCategory)
      : expenses;

  return (
    <>
      <div className="mb-3">
        <ExpenseFilter
          defaultSelectedCategory={selectedCategory}
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}

export default App;
