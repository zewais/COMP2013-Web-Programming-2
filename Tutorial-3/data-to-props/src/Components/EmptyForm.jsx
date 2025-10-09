//This is a submit event handler function
const handleOnSubmit = (e) => {
  e.preventDefault(); //this will prevent the page from reloading
  console.log("This is a submission form");
};

export default function EmptyForm() {
  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <input type="submit" />
      </form>
    </div>
  );
}
