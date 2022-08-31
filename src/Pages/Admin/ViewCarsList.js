import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "../../Components/Dashboard";
import CarViewSection from "../../Components/CarViewSection";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Example() {
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
  // function for delete
  async function removeCar(id) {
    try {
      axios.delete(`http://localhost:8000/car/${id}`);
      toast.success("Car Deleted");
    } catch (error) {
      toast.error("Error deleting");
    }
  }
  return (
    <div className="flex ">
      <Dashboard />
      <div className="flex flex-col justify-center w-full">
        <CarViewSection />
        <div className="px-4 sm:px-6 lg:px-8 ">
          <Link to="/admin/carregistration">
            <div className="sm:flex sm:items-center">
              <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <button
                  type="button"
                  className="mt-3 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                >
                  Add Car
                </button>
              </div>
            </div>
          </Link>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Image
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Plate Number
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Model Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Car Category
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Availability
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Edit
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {cars.map((car, index) => (
                        <tr key={index}>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={`http://localhost:8000/${car.image[0]}`}
                                alt=""
                              />
                            </div>
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="font-medium text-gray-900">
                                  {car.plateNumber}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div className="text-gray-900">{car.modelName}</div>
                            <div className="text-gray-500">{car.modelYear}</div>
                          </td>

                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {car.carCategoryName.costPerDay}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              {car.availablibiltyFlag === true
                                ? "Available"
                                : "Not Available"}
                            </span>
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <Link
                              to={`/admin/menu/edit/${car._id}`}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Edit
                              <span className="sr-only">, {car.modelName}</span>
                            </Link>
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <div
                              className="text-red-600 hover:text-red-900 cursor-pointer"
                              onClick={() => removeCar(car._id)}
                            >
                              Delete
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
