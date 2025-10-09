const clickMessage = () => {
  console.log("This is a clicker function!");
};

export default function Clicker() {
  //to make an external function work properly in an event handler, we need to remove the brackets and keep the
  //function name without brackets.
  return <button onClick={clickMessage}>Click Me</button>;
}
