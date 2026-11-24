
import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Todo
  const handleAdd = () => {
    if (todo.trim() === "") return;

    setTodos([...todos, {
      id: Date.now(),
      text: todo
    }]);

    setTodo("");
  };

  // Delete Todo
  const handleDelete = (id) => {
    const updatedTodos = todos.filter(
      (item) => item.id !== id
    );

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter your todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add Todo
      </button>

      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.text}

            <button onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
