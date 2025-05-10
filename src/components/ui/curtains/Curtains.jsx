"use client";

import ProductCard from "@/components/shared/ProductCard";
import { useEffect, useState } from "react";

const Curtains = ({ count = 10 }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./fackDb.json");
      const products = await res.json();

      setProducts(products.Curtains);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {products?.slice(0, count).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Curtains;
