import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Cars = () => {
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
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
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
      <Footer />
    </div>
  );
};

export default Cars;
