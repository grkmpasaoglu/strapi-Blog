import { useState, useEffect } from "react";

export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:1337/api/products");
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div>
        <ul>
            {data.data.map(product => (
                <li key={product.id}>
                    <h2 className="text-blue-950 text-3xl text-center">
                        {product.attributes.name}
                        <hr/>
                        <code className="text-xl text-red-800">{product.attributes.price}</code>
                    </h2>
                </li>
            ))}
        </ul>
    </div>
    )
}