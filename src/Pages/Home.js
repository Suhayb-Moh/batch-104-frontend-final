/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from "react";
import axios from "axios";
import CategorySection from "../Components/CategoriesSection";
import Logos from "../Components/Logos";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import classes from "../Components/Modal.module.css";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/car")
      .then((response) => {
        setCars(response.data.cars.slice(0, 6));

        setIsLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="relative bg-gray-50">
        <main className="lg:relative">
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Choose Your</span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  Dream Car
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Hada Dalbo | Hel Wakhtigaad Rabto
              </p>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            {cars.map((car, index) => (
              <img
                key={index}
                className="absolute inset-0 w-full h-full object-cover"
                src={`http://localhost:8000/${car.image[0]}`}
                alt=""
              />
            ))}
          </div>
        </main>
      </div>

      <div className="bg-white  mt-1">
        {/* Products Section */}
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <Link to="/cars">
              <div className="flex items-center font-bold font-xl">
                <h3>View All</h3>
                <AiOutlineRight />
              </div>
            </Link>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8 my-10">
              {cars.map((car) => (
                <Link to={`/caroverview/${car._id}`} key={car._id}>
                  <div className="group">
                    <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                      <img
                        src={`http://localhost:8000/${car.image[0]}`}
                        alt={car.modelName}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                      <h3>{car.modelName}</h3>
                      <p>${car.carCategoryPrice.costPerDay}</p>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">
                      {car.carCategoryName.categoryName}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CategorySection />
      <Logos />
    </div>
  );
}
