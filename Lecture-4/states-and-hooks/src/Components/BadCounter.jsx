//This is NOT the correct way to store, manipulate, and rerender components

export default function BadCounter() {
  let count = 0;
  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          count++;
          console.log(count);
        }}
      >
        Add to counter
      </button>
    </div>
  );
}
