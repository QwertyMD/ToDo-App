import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Button from "./components/Button";
import { IoIosCloseCircle } from "react-icons/io";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleAdd = () => {
    if (!todo) return;
    const newTodo = { text: todo, checked: false };
    setTodos([newTodo, ...todos]);
    setTodo("");
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleChecked = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="bg-[#201f31] min-h-screen flex justify-center items-center">
      <main>
        <div className="main-container bg-[#ffbade] p-5 rounded-xl space-y-5">
          <h1 className="font-bold text-2xl">To-Do List</h1>
          <div className="input-section flex items-center gap-5">
            <Form todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <Button onClick={handleAdd} />
          </div>
          {todos.length === 0 && (
            <div className="todo-section bg-pink-300 rounded-xl p-5 flex items-center justify-center max-w-full font-medium">
              Empty Just Like Your Brain
            </div>
          )}
          {todos.map((item, index) => (
            <div
              key={index}
              className="todo-section bg-pink-300 rounded-xl p-5 flex items-center justify-between max-w-full"
            >
              <div className="todo-text flex items-center gap-3">
                <input
                  onChange={() => toggleChecked(index)}
                  checked={item.checked}
                  type="checkbox"
                  className="w-4 h-4 appearance-none rounded-full bg-yellow-300 checked:bg-green-600 cursor-pointer"
                />
                <p
                  className={`${
                    item.checked ? "line-through" : ""
                  } font-medium break-words`}
                >
                  {item.text}
                </p>
              </div>
              <IoIosCloseCircle
                onClick={() => handleDelete(index)}
                className="text-2xl cursor-pointer hover:text-red-500 flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
