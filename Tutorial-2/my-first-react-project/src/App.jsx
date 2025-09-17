import "./App.css";
import Card from "./Components/Card";
// import HelloWorld from "./Components/HelloWorld";

function App() {
  return (
    <div className="main-div">
      <h1>Diamond World</h1>
      <div className="main-container">
        <Card image="src\assets\images\1.jpg" name="princess" price="$1,350" />
        <Card
          image="src\assets\images\2.jpg"
          name="swan"
          price="$900"
          sale={true}
        />
        <Card
          image="src\assets\images\3.jpg"
          name="collection"
          price="$1,100"
          sale={true}
        />
      </div>
    </div>
  );
}

export default App;
