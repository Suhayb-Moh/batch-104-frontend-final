import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon, MinusSmIcon, PlusSmIcon } from "@heroicons/react/outline";

const product = {
  name: "Toyota Harrier",
  price: "$35",
  rating: 3,
  images: [
    {
      id: 1,
      name: "Toyota Harrier",
      // src: "https://scontent.fhga1-1.fna.fbcdn.net/v/t39.30808-6/295539229_3245614902390907_6146478477194368868_n.jpg?stp=cp1_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2Wc6bEx0LKIAX9k56FS&_nc_ht=scontent.fhga1-1.fna&oh=00_AT_nvk-N5PWj6NAo-vYXRxSizr_HajoPTNPC-_6QjTN-Fw&oe=63061C16",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 2,

      name: "Toyota Harrier",
      // src: "https://scontent.fhga1-1.fna.fbcdn.net/v/t39.30808-6/295511282_3245614855724245_6646551274541553691_n.jpg?stp=cp1_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ALT5MOuEyDMAX8MCvZp&_nc_oc=AQllWHjjNfFJ5H1YmIhTY2-i7KwXmMZshVMojnLOXzUaeVvQzjG4sFvqsHJcdLZIAOE&_nc_ht=scontent.fhga1-1.fna&oh=00_AT8H6wiVIspnGZgGG7uT8aptzd63BdM2KizwNWdIjHf62Q&oe=6301F8E8",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 3,
      name: "Toyota Harrier",
      src: "https://scontent.fhga1-1.fna.fbcdn.net/v/t39.30808-6/295526084_3245614879057576_3553515484039953055_n.jpg?stp=cp1_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=6YT_lk6YgLkAX_3UMQp&_nc_ht=scontent.fhga1-1.fna&oh=00_AT--fjyoGYhMQazTmVmH6iTsQARYItYPJYUjkzc58Ba5Pw&oe=6302FA1B",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 4,
      name: "Toyota Harrier",
      // src: "https://scontent.fhga1-1.fna.fbcdn.net/v/t39.30808-6/295497990_3245614792390918_2986231986220610640_n.jpg?stp=cp1_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=kRPbNDHzT2oAX-uXPlg&_nc_ht=scontent.fhga1-1.fna&oh=00_AT-eZTDg9YEI7nMBwKzpbA3PBrDkw2b4NVEaLqyx_51XfA&oe=6302C715",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],

  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CarOverView() {
  const [carInfo, setCarInfo] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [price, setPrice] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/car/${id}`)
      .then((response) => {
        setCarInfo(response.data.result);
        setImgs(response.data.result.image);
        setPrice(response.data.result.carCategoryName.costPerDay);
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

            <form className="mt-6">
              {/* Colors */}
              <div></div>

              <div className="mt-10 flex sm:flex-col1">
                <button
                  type="submit"
                  className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                >
                  Book Now
                </button>

                <button
                  type="button"
                  className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <HeartIcon
                    className="h-6 w-6 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Add to favorites</span>
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
