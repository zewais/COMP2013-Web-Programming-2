export default function FormComponent({
  todo = { title: "placeholder" },
  handleOnChange,
  handleAddTodo,
}) {
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={(e) => handleOnChange(e)}
        />
        <button onClick={(e) => handleAddTodo(e)}>Add task to list</button>
      </form>
    </div>
  );
}
