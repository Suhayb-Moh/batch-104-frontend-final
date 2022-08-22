/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from "react";
import axios from "axios";
import CategorySection from "../Components/CategoriesSection";
import Logos from "../Components/Logos";
import { Link } from "react-router-dom";

export default function Home() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/car")
      .then((response) => {
        setCars(response.data.cars);
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
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://scontent.fhga1-1.fna.fbcdn.net/v/t39.30808-6/299351600_3259069344378796_1807598120226063361_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5YFyrCWsTgAAX-ImCH_&_nc_ht=scontent.fhga1-1.fna&oh=00_AT9D5mUMQ14W9Oxxn0CGHSKDuIZ0CM5U3n0sUR5_2-MLjg&oe=6305D5B1"
              alt=""
            />
          </div>
        </main>
      </div>

      <div className="bg-white  mt-1">
        {/* Products Section */}
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {cars.map((car) => (
                <Link to="/caroverview" key={car._id}>
                  <div className="group">
                    <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                      <img
                        src={`http://localhost:8000/${car.image}`}
                        alt={car.modelName}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                      <h3>{car.modelName}</h3>
                      <p>${car.carCategoryName.costPerDay}</p>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">
                      {car.carCategoryName.costPerDay}
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
