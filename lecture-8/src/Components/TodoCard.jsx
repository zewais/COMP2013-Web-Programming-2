export default function TodoCard({
  title,
  checked,
  handleOnCheck,
  handleOnDelete,
  index,
}) {
  return (
    <div>
      {/* checkbox */}
      <input
        type="checkbox"
        name="checked"
        checked={checked}
        onChange={(e) => handleOnCheck(e, index)}
      />
      {/* title */}
      <span
        style={
          checked
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {title}
      </span>
      {/* delete button */}
      <button onClick={() => handleOnDelete(index)}>Delete</button>
    </div>
  );
}
