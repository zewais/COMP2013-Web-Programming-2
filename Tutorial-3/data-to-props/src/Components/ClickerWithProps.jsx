//This is a event onClick function aka handler
const msgOnClick = (msg) => console.log(msg);

export default function ClickerWithProps({ message, btnText }) {
  //if a handler has a parameter and needs an argument to work,
  //we must use a lambda funtion inside the event
  return <button onClick={() => msgOnClick(message)}>{btnText}</button>;
}
