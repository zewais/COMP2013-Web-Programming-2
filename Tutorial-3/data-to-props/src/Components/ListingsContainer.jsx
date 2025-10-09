import Listing from "./Listing"; //importing single listing component

export default function ListingContainer({ items }) {
  return (
    <div className="ListingsContainer">
      {items.map((item) => (
        <Listing key={item.id} {...item} />
      ))}
    </div>
  );

  //   let listings = []; //empty array to store all the new listing with data
  //   items.forEach((item) => {
  //     listings.push(
  //       <Listing
  //         pic={item.pic}
  //         country={item.country}
  //         location={item.location}
  //         price={item.price}
  //         rating={item.rating}
  //       />
  //     );
  //   });
  //   return <div className="ListingsContainer">{listings}</div>; //return all the new listings after filling out the data
}
