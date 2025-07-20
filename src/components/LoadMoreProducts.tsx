import { useEffect, useState } from "react";

interface ProductStructure {
  id: number;
  title: string;
  image: string;
}

const LoadMoreProducts = () => {
  const [numToLoad, setNumToLoad] = useState(8);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<null | ProductStructure[]>(null);

  async function FetchData1() {
    setIsLoading(true);
    const res = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );

    setIsLoading(false);
    setData(res);
    console.log(res);
  }

  useEffect(() => {
    FetchData1();
  }, [numToLoad]);

  if (isLoading) return <p>Loading Products. Please Wait!!</p>;

  return (
    <div className="px-3">
      <h1 className="lg:text-5xl text-2xl sm:text-4xl font-extrabold text-center my-20 tracking-widest">
        Load More Products
      </h1>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {data?.slice(0, numToLoad).map((product) => (
          <div key={product.id} className="border px-4 py-3">
            <img src={product.image} className="h-20 w-full mb-3 object-cover block mx-auto" alt="" />
            <p className="w-full text-center truncate">{product.title}</p>
          </div>
        ))}
      </div>
      {numToLoad < (data?.length ?? 0) && (
        <button className="my-10 border py-2 px-4 duration transition-all hover:rounded-2xl cursor-pointer block mx-auto" onClick={() => setNumToLoad((prev) => prev + 4)}>
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMoreProducts;
