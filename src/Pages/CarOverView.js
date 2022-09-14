import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import Modal from "../Components/Modal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CarOverView() {
  const [carInfo, setCarInfo] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [price, setPrice] = useState([]);
  const [name, setName] = useState([]);
  const [modalOn, setModalOn] = useState(false);

  const modalHandler = () => {
    setModalOn(true);
  };

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/car/${id}`)
      .then((response) => {
        setCarInfo(response.data.result);
        setImgs(response.data.result.image);
        setPrice(response.data.result.carCategoryPrice.costPerDay);
        setName(response.data.result.carCategoryName.categoryName);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}

          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}

            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {imgs.map((image, index) => (
                  <Tab
                    key={index}
                    className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{carInfo.modelName}</span>
                        <span className="absolute inset-0 rounded-md overflow-hidden">
                          <img
                            src={`http://localhost:8000/${image}`}
                            alt=""
                            className="w-full h-full object-center object-cover"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? "ring-indigo-500" : "ring-transparent",
                            "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>
            <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
              {imgs.map((image, index) => (
                <Tab.Panel key={index}>
                  <img
                    src={`http://localhost:8000/${image}`}
                    alt={carInfo.plateNumber}
                    className="w-full h-full object-center object-cover sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {carInfo.modelName}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">${price}</p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        carInfo.rating > rating
                          ? "text-indigo-500"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{carInfo.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{
                  __html: `Category: ${name}'s`,
                }}
              />
            </div>

            <div className="mt-6">
              {/* Colors */}

              <div className="mt-10 flex sm:flex-col1">
                <button
                  className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                  onClick={modalHandler}
                >
                  Book Now
                </button>
              </div>
            </div>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>
            </section>
          </div>
        </div>
      </div>
      {modalOn && <Modal setModalOn={setModalOn} />}
    </div>
  );
}
