import { useState, useEffect } from "react";
import Navbar from "../component/navbar";
import Sidebar from "../component/sidebar";
import Leftbar from "../component/leftbar";
import ReactMarkdown from "react-markdown";

export default function Blogs() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:1337/api/blogs");
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
    <div className="">
      <Navbar />
      <div className="flex flex-row mb-10 w-9/12 justify-start ml-64">
        <a
          href="https://popupsmart.com/"
          className="text-xs text-gray-500 mr-5 hover:underline"
        >
          Popupsmart
        </a>
        <a
          href="https://popupsmart.com/blog/"
          className="text-xs text-gray-500 mr-5 hover:underline"
        >
          Blog
        </a>
        <a className="text-xs text-gray-600 font-bold">
          Why You Should Use COVID-19 Response Notification Popup?
        </a>
      </div>
      <div className="container mx-auto">
        <div className="flex float-left">
          <div className="ml-auto">
            <Leftbar />
          </div>
        </div>
        <ul>
          {data &&
            data.data &&
            data.data.map((blog) => (
              <div className="flex justify-center">
                <div className="w-5/12">
                  <h2 className="text-4xl text-black font-bold mb-6">
                    {blog.attributes.title}
                  </h2>
                  <ReactMarkdown className="text-base text-gray-500">
                    {blog.attributes.body}
                  </ReactMarkdown>
                </div>
                <Sidebar />
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}
