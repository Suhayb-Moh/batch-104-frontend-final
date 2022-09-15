import { React, useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/categories")
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8 my-10">
          {categories.map((category) => (
            <Link
              to={`/browsecategories/${category._id}`}
              key={category._id}
              className="relative w-56 h-80 rounded-lg p-6 flex flex-col
                      overflow-hidden hover:opacity-75 xl:w-auto"
            >
              <span aria-hidden="true" className="absolute inset-0">
                <img
                  src={`http://localhost:8000/${category.image}`}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
              />
              <span className="relative mt-auto text-center text-xl font-bold text-white">
                {category.categoryName}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
