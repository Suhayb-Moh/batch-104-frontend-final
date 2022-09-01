import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Sedans",
    href: "#",
    imageSrc:
      "https://imgd.aeplcdn.com/600x337/n/cw/ec/41197/hyundai-verna-right-front-three-quarter7.jpeg?q=75",
  },
  {
    name: "SUV's",
    href: "#",
    imageSrc:
      "https://www.drivespark.com/car-image/640x480x100/car/x33804656-mahindra_xuv700.jpg.pagespeed.ic.Oehde-DhPZ.jpg",
  },
  {
    name: "Family Cars",
    href: "#",
    imageSrc:
      "https://cdn.24.co.za/files/Cms/General/d/7585/6c9b630ddfb44d3b9e7f867b11f1a2da.jpg",
  },
  {
    name: "Land Cruisers",
    href: "#",
    imageSrc:
      "https://imgd.aeplcdn.com/664x374/cw/ec/20695/Toyota-Land-Cruiser-Right-Front-Three-Quarter-60016.jpg?v=201711021421&q=75",
  },
  {
    name: "Small Cars",
    href: "#",
    imageSrc:
      "https://scontent.fhga1-1.fna.fbcdn.net/v/t39.30808-6/295548318_3245613775724353_2521752149924722232_n.jpg?stp=cp1_dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1Xjh_xcwoAUAX8zymOi&_nc_ht=scontent.fhga1-1.fna&oh=00_AT_BfNMr_reUSXf5yLCrN-ED17nyfhhk4MUCaIMCrh8Iuw&oe=62FE2155",
  },
];

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  const [cars, setCars] = useState([]);

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
      <div className="bg-slate-100">
        <div className="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
          <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Browse By Category
            </h2>
          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2">
              <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
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
            </div>
          </div>

          <div className="mt-6 px-4 sm:hidden">
            <a
              href="#"
              className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Browse all categories<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default CategoriesSection;
