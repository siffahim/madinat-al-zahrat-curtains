const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="relative group overflow-hidden cursor-pointer">
      <img
        className="w-full h-full group-hover:scale-110 duration-300"
        src={product.image}
        alt=""
      />
      <div className="w-full h-full  bg-[#0000005e] absolute left-0 top-0"></div>
      <div className="absolute bottom-0 p-5 text-xl font-medium text-white group-hover:underline duration-200">
        {product.name}
      </div>
    </div>
  );
};

export default ProductCard;
