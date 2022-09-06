import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BrowseCategories() {
  const [open, setOpen] = useState(false);
  const [cars, setCars] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/car/sortbyid/${id}`)
      .then((response) => {
        setCars(response.data.cars);
        console.log(response.data.cars);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              {/* Links */}
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <main className="pb-24">
        {/* Filters */}

        {/* Product grid */}
        <section
          aria-labelledby="products-heading"
          className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8 "
        >
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-3 my-9">
            {cars.map((car) => (
              <div
                key={car._id}
                className="group relative p-4 border-r border-b border-gray-200 sm:p-6"
              >
                <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                  <img
                    src={`http://localhost:8000/${car.image[0]}`}
                    alt={car.modelName}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="pt-10 pb-4 text-center">
                  <h3 className="text-sm font-medium text-gray-900">
                    <Link to={`/caroverview/${car._id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {car.modelName}
                    </Link>
                  </h3>
                  <div className="mt-3 flex flex-col items-center">
                    <p className="sr-only">{car.rating} out of 5 stars</p>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            car.rating > rating
                              ? "text-yellow-400"
                              : "text-gray-200",
                            "flex-shrink-0 h-5 w-5"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {car.reviewCount} reviews
                    </p>
                  </div>
                  <p className="mt-4 text-base font-medium text-gray-900">
                    {car.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
