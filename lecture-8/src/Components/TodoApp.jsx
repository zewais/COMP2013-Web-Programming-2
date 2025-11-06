import { useState } from "react";
import FormComponent from "./FormComponent";
import TodoCardsContainer from "./TodoCardsContainer";

export default function TodoApp() {
  //state for a single todo item
  const [todo, setTodo] = useState({
    title: "",
    checked: false,
  });

  //state for all the todo list items together
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo.title === "") {
      alert("Please add a title first before adding a todo item!");
    } else {
      //this function will add a todo item to the todo list
      setTodoList((prevList) => {
        return [...prevList, todo];
      });
      setTodo({
        title: "",
        checked: false,
      });
    }
  };

  const handleOnChange = (e) => {
    //this function will handle the onChange event to enable change on the title input in FormComponent
    setTodo((prevTodo) => {
      return {
        ...prevTodo,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleOnCheck = (e, index) => {
    //This function will handle the checked form for the todo item
    setTodoList(
      //if the index matches the index of the item we are clicking on
      //change the checked value to the current value of the click checkbox
      todoList.map((item, i) =>
        i === index ? { ...item, checked: e.target.checked } : item
      )
    );
  };

  const handleOnDelete = (index) => {
    //This function will handle the deletion of an item
    setTodoList((prevList) => {
      return prevList.filter((item, i) => i !== index);
    });
  };

  //Rendering the app
  return (
    <div>
      <h1>Todo List</h1>
      <FormComponent
        handleAddTodo={handleAddTodo}
        handleOnChange={handleOnChange}
        todo={todo}
      />
      <TodoCardsContainer
        handleOnDelete={handleOnDelete}
        handleOnCheck={handleOnCheck}
        todoList={todoList}
      />
    </div>
  );
}
