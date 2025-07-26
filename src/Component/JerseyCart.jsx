const JerseyCart = ({ product }) => {
  return (
      <div
        className={`bg-gray-800 rounded-2xl shadow-lg border rounded-lgp-6 flex flex-col items-center w-full sm:w-[45%] md:w-[40%] lg:w-[30%] p-4 h-fit`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-52 sm:h-40 object-contain mb-6"
        />
        <h3 className={`text-2xl font-mono text-white py-2 font-bold`}>{product.name}</h3>
        <p className={`mb-4 text-gray-200 text-center font-mono min-h-10`}>
          {product.description}
        </p>
        <span className={`font-mono text-lg mb-4 text-white`}>
          {product.price}
        </span>
        <button className="bg-white text-black px-4 py-2 rounded-full font-mono shadow hover:bg-gray-100">
          Add to Cart
        </button>
      </div>
  )
}

export default JerseyCart