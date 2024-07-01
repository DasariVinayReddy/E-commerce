import watch from "../assets/apple-watch.png";
import airpods from "../assets/airpods.png";
import Mac from "../assets/mac.png";
import apple from "../assets/15-apple.png";
import Mouse from "../assets/mouse.png";
import { ProductCard } from "../components/ProductCard";

export const Home = () => {
  const products = [
    {
      id: "1",
      name: "Apple Watch",
      image: `${watch}`,
      price: 950,
    },
    {
      id: "2",
      name: "iPhone 13 Pro Max",
      image: `${apple}`,
      price: 678,
    },
    {
      id: "3",
      name: "Macbook Air M1",
      image: `${Mac}`,
      price: 2499,
    },
    {
      id: "4",
      name: " Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
      image: `${watch}`,
      price: 599,
    },
    {
      id: "5",
      name: "AirPods Pro with TWS and Wireless Charging",
      image: `${airpods}`,
      price: 239.99,
    },
    {
      id: "6",
      name: "Magic Mouse Mighty Mouse - Fourth Generation ",
      image: `${Mouse}`,
      price: 149.99,
    },
  ];
  return (
    <section className="max-w-7x1 mx-auto py-7">
      <div className="flex justify-center flex-wrap other:justify-evenly">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
