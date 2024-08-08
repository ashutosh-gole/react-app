import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  // code executed every time when change in value => [category]
  useEffect(() => {
    console.log("Fetching products in category ===== ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  // code executed once after render
  // useEffect(() => {
  //   console.log("Fetching products in category ===== ", category);
  //   setProducts(["Clothing", "Household"]);
  // }, []);

  // code executed infinite time
  // useEffect(() => {
  //   console.log("Fetching products in category ===== ", category);
  //   setProducts(["Clothing", "Household"]);
  // }, []);

  return <div>ProductList</div>;
};

export default ProductList;
