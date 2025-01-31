import React from "react";
const Form = ({ todo, setTodo, handleAdd }) => {
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };
  return (
    <form className="mx-auto flex items-center gap-x-5">
      <div className="relative z-0 w-full mb-5 group">
        <input
          value={todo}
          type="text"
          name="floating_text"
          id="floating_text"
          className="block py-2.5 px-0 w-[30vw] bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 peer font-medium"
          placeholder=""
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={handleEnter}
        />
        <label
          htmlFor="floating_text"
          className="peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Add Task
        </label>
      </div>
    </form>
  );
};

export default Form;
