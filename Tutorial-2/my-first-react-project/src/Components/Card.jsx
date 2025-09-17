export default function Card(props) {
  console.log(props);
  return (
    <div
      className={
        props.sale ? "Card-Component Card-Sale-Glow" : "Card-Component"
      }
    >
      <img src={props.image} alt="" width="100px" />
      <h2>{props.name}</h2>
      {props.sale ? <h3 className="Card-Sale">Sale</h3> : <h3>&nbsp;</h3>}
      <p>{props.price}</p>
      <button>Buy Now</button>
    </div>
  );
}

//prop.sale && "message" => if prop.sale === true, message will appear
//prop.sale || "message" => if prop.sale === false, message will appear
