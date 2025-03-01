"use client"
import { useState } from "react";

type Todo = {
  id: number;
  text: string;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <section className="bg-white min-h-screen flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">ToDoList App</h1>
      <div className="w-full max-w-md bg-blue-100 rounded-lg shadow-md p-6">
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="flex-1 p-2 border border-blue-400 rounded-lg"
            placeholder="Enter a task"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center p-2 bg-white border border-blue-400 rounded-lg">
              <span className="text-blue-700">{todo.text}</span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}