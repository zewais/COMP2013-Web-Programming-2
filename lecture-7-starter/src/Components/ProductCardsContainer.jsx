import ProductCard from "./ProductCard";

export default function ProductCardsContainer({ data }) {
  return (
    <div className="ProductCardsContainer">
      {data.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
