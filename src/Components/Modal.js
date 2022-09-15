/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import axios from "axios";
import { toast } from "react-toastify";

export default function Modal({ setModalOn }) {
  const [open, setOpen] = useState(true);
  const [inputs, setInputs] = useState({});
  const [carInfo, setCarInfo] = useState("");
  const [plate, setPlate] = useState("");
  const [available, setAvailable] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const amountRef = useRef({ inputs });
  const plateRef = useRef({ inputs });

  useEffect(() => {
    // console.log(amountRef.current.value);
    // console.log(plateRef.current.value);
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/car/${id}`).then((response) => {
      setCarInfo(
        response.data.result.carCategoryPrice.costPerDay * inputs.duration
      );
      setPlate(response.data.result.plateNumber);
      setAvailable(response.data.result.available);
    });
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/bookings`).then((response) => {
      response.data.bookings.map((booking) =>
        booking.plateNumber.includes(plate) === true
          ? (inputs.status = "approved")
          : "pending"
      );
    });
  });

  async function submitHandler() {
    try {
      inputs.amount = amountRef.current.value;
      inputs.plateNumber = plateRef.current.value;
      const res = await axios.post("http://localhost:8000/bookings", inputs);
      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <div className="pt-8">
                  <div>
                    <h3 className="text-xl leading-6  text-gray-900 font-bold">
                      Please Fill The Form To Complete Your Booking
                    </h3>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          onChange={(e) =>
                            setInputs({
                              ...inputs,
                              firstName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          onChange={(e) =>
                            setInputs({
                              ...inputs,
                              lastName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          onChange={(e) =>
                            setInputs({
                              ...inputs,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="days"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Duration
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="duration"
                          id="duration"
                          autoComplete="duration"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          onChange={(e) =>
                            setInputs({
                              ...inputs,
                              duration: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="address"
                          id="address"
                          autoComplete="address"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          onChange={(e) =>
                            setInputs({
                              ...inputs,
                              address: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="amount"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Amount
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          disabled
                          defaultValue={carInfo || ""}
                          name="amount"
                          id="amount"
                          autoComplete="amount"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          ref={amountRef}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="phone"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          onChange={(e) =>
                            setInputs({
                              ...inputs,
                              phoneNumber: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="plateNumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        PlateNumber
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          disabled
                          defaultValue={plate}
                          name="plateNumber"
                          id="plateNumber"
                          autoComplete="plateNumber"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          ref={plateRef}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={submitHandler}
                >
                  Book Now
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
